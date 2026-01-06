import { View, Text, FlatList, ActivityIndicator, Pressable, Alert } from "react-native";
import { useEffect, useState, useMemo } from "react";
import { ShowContentStyle } from "../../styles/ShowContent";
import { Ionicons } from '@expo/vector-icons';

import { listenTransactionsByRange } from "../../services/listenTransactionsByRange";
import { useDateRangeStore } from "../../store/useDateRangeStore";
import { useButtonsTransaction } from "../../store/StateGlobal";
import { useTransactionsStore } from '../../store/useTransactionsStore';
import { deleteTransaction } from "../../services/deleteTransaction";


const {
  containerTransactions,
  containerTransaction,
  backgroundExpenseIcon,
  backgroundIncomeIcon,
  text,
  textContainer
} = ShowContentStyle;

const ShowContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📅 rango de fechas
  const from = useDateRangeStore(state => state.from);
  const to   = useDateRangeStore(state => state.to);

  // 🔘 botones expense / income
  const buttons = useButtonsTransaction(
    state => state.buttonsTransactionState
  );

  // 🌍 store global (Header)
  const setTransactions = useTransactionsStore(
    state => state.setTransactions
  );

  useEffect(() => {
    setLoading(true);

    const unsubscribe = listenTransactionsByRange(
      from,
      to,
      (results) => {
        setData(results);          // UI lista
        setTransactions(results);  // Header
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [from, to]);

  // 🔍 filtrado real
  const filteredData = useMemo(() => {
    if (buttons.expense) {
      return data.filter(item => item.type === 'expense');
    }
    if (buttons.income) {
      return data.filter(item => item.type === 'income');
    }
    return [];
  }, [data, buttons]);

  return (
    <View style={containerTransactions}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Pressable style={containerTransaction}
                onPress={() => {
                Alert.alert(
                    'Eliminar transacción',
                    `¿Deseas eliminar "${item.category}"?`,
                    [
                    { text: 'Cancelar', style: 'cancel' },
                    {
                        text: 'Eliminar',
                        style: 'destructive',
                        onPress: () => deleteTransaction(item.id),
                    },
                    ]
                );
                }}
            >
                <View
                    style={[
                    item.type === 'expense'
                        ? backgroundExpenseIcon
                        : backgroundIncomeIcon
                    ]}
                >
                    <Ionicons
                    name={item.icon}
                    size={28}
                    color="#fff"
                    />
                </View>

                <View style={textContainer}>
                    <Text style={text}>{item.category}</Text>
                    <Text style={text}>${item.amount}</Text>
                </View> 
            </Pressable>
            )}
        ListEmptyComponent={
          !loading && (
            <Text style={[text, { paddingTop: 100 }]}>
              No hay transacciones para mostrar
            </Text>
          )
        }
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

export default ShowContent;
