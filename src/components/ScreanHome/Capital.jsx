import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import { useButtonsTransaction } from "../../store/StateGlobal";
import { useShowCalendarState } from "../../store/useShowCalendarState";
import { useDateRangeStore } from "../../store/useDateRangeStore";
import { useTransactionsStore } from "../../store/useTransactionsStore";

import { CapitalStyle } from "../../styles/Capital";
import ButtonAdd from "./ButtonAdd";

const {
  containerModal,
  textG,
  textI,
  modal,
  positionCircle,
  positionButtonAdd,
  containerG,
  containerI
} = CapitalStyle;

const Capital = ({ navigation }) => {

  const [total, setTotal] = useState(0);

  // botones
  const { expense, income } = useButtonsTransaction(
    state => state.buttonsTransactionState
  );

  // calendario
  const showCalendarState = useShowCalendarState(
    state => state.showCalendarState
  );

  const from = useDateRangeStore(state => state.from);
  const to   = useDateRangeStore(state => state.to);

  // 🔥 transacciones YA cargadas (ShowContent)
  const transactions = useTransactionsStore(
    state => state.transactions
  );

  useEffect(() => {
    if (!from || !to) return;

    let sum = 0;

    transactions.forEach(t => {
      if (expense && t.type === 'expense') {
        sum += Number(t.amount);
      }

      if (income && t.type === 'income') {
        sum += Number(t.amount);
      }
    });

    setTotal(sum);
  }, [transactions, from, to, expense, income]);

  return (
    <View style={containerModal}>
      {!showCalendarState && (
        <View style={modal}>

          <View style={positionCircle}>
            {expense ? (
              <View style={containerG}>
                <Text style={textG}>
                  ${total.toLocaleString('es-CO')}
                </Text>
              </View>
            ) : (
              <View style={containerI}>
                <Text style={textI}>
                  ${total.toLocaleString('es-CO')}
                </Text>
              </View>
            )}
          </View>

          <View style={positionButtonAdd}>
            <ButtonAdd navigation={navigation} />
          </View>

        </View>
      )}
    </View>
  );
};

export default Capital;
