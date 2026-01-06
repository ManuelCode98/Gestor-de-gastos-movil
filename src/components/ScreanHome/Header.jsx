import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';

import { styleHeader } from '../../styles/Header';
import { useTransactionsStore } from '../../store/useTransactionsStore';

const Header = () => {
  const transactions = useTransactionsStore(state => state.transactions);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach(t => {
      if (t.type === 'income') income += Number(t.amount);
      if (t.type === 'expense') expense += Number(t.amount);
    });

    setTotal(income - expense);
  }, [transactions]);

  const isPositive = total >= 0;

  return (
    <View style={styleHeader.container}>
      <Text style={styleHeader.title}>Mi Dinero: </Text>

      <Text
        style={[
          styleHeader.title,
          { color: isPositive ? '#2ecc71' : '#e74c3c' }
        ]}
      >
        {isPositive ? '$' : '-$'}
        {Math.abs(total).toLocaleString('es-CO')}
      </Text>
    </View>
  );
};

export default Header;
