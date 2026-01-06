import { Calendar } from 'react-native-calendars';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import { styleCalendarComp } from '../../styles/CalendarComp';
import { getDayRange, getMonthRange, getYearRange } from '../../helpers/dateRange';
import { useShowCalendarState } from '../../store/useShowCalendarState';
import { useDateRangeStore } from '../../store/useDateRangeStore';

const {
  themeCalendar,
  container,
  text,
  textR,
  textDate,
  selectDate,
  showDate,
  monthGrid,
  monthItem,
  selectMonthAndYear,
  yearGrid,
  yearItem
} = styleCalendarComp;

const MONTHS = [
  'Enero','Febrero','Marzo','Abril',
  'Mayo','Junio','Julio','Agosto',
  'Septiembre','Octubre','Noviembre','Diciembre'
];

// const TODAY = new Date().toISOString().split('T')[0];
const getLocalDateString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const TODAY = getLocalDateString();
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 12 }, (_, i) => CURRENT_YEAR - (11 - i));


const CalendarComp = () => {
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [mode, setMode] = useState('day');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);

  const showCalendar = useShowCalendarState(s => s.showCalendarState);
  const setShowCalendar = useShowCalendarState(s => s.setShowCalendarState);

  const setRange = useDateRangeStore(s => s.setRange);

  const closeCalendar = () => setShowCalendar(false);

  /* 🔹 APLICA RANGO AUTOMÁTICO AL CAMBIAR DE MODO */
  useEffect(() => {
    if (mode === 'day') {
      const { from, to } = getDayRange(selectedDate);
      setRange(from, to);
    }

    if (mode === 'month') {
      const { from, to } = getMonthRange(selectedDate);
      setRange(from, to);
    }

    if (mode === 'year') {
      const { from, to } = getYearRange(selectedDate);
      setRange(from, to);
    }
  }, [mode]);

  const displayText = () => {
    const [y, m, d] = selectedDate.split('-');

    if (mode === 'day') {
      return new Date(y, m - 1, d).toLocaleDateString('es-ES');
    }

    if (mode === 'month') {
      return MONTHS[m - 1];
    }

    return y;
  };

  return (
    <View style={container}>

      {/* SELECTOR */}
      <View style={selectDate}>
        <Text style={ mode === 'day' ? textR: text } onPress={() => setMode('day')}>Día</Text>
        <Text style={ mode === 'month' ? textR: text } onPress={() => setMode('month')}>Mes</Text>
        <Text style={ mode === 'year' ? textR: text } onPress={() => setMode('year')}>Año</Text>
      </View>

      <Text
        style={[text, textDate]}
        onPress={() => setShowCalendar(!showCalendar)}
      >
        {displayText()}
      </Text>

      {/* DÍA */}
      {mode === 'day' && showCalendar && (
        <Calendar
          theme={themeCalendar}
          current={selectedDate}
          maxDate={TODAY}
          style={showDate}
          onDayPress={(e) => {
            setSelectedDate(e.dateString);
            const { from, to } = getDayRange(e.dateString);
            setRange(from, to);
            closeCalendar();
          }}
          markedDates={{
            [selectedDate]: { selected: true }
          }}
        />
      )}

      {/* MES */}
      {mode === 'month' && showCalendar && (
        <View style={monthGrid}>
          {MONTHS.map((m, i) => {
            const isSelected = selectedMonth === i;
            return (
              <Text
                key={m}
                style={[monthItem, isSelected && selectMonthAndYear]}
                onPress={() => {
                  const year = selectedDate.split('-')[0];
                  const monthNumber = String(i + 1).padStart(2, '0');
                  const date = `${year}-${monthNumber}-01`;

                  setSelectedDate(date);
                  setSelectedMonth(i);

                  const { from, to } = getMonthRange(date);
                  setRange(from, to);
                  closeCalendar();
                }}
              >
                {m}
              </Text>
            );
          })}
        </View>
      )}

      {/* AÑO */}
      {mode === 'year' && showCalendar && (
        <View style={yearGrid}>
          {YEARS.map(y => {
            const isSelected = selectedYear === y;
            return (
              <Text
                key={y}
                style={[yearItem, isSelected && selectMonthAndYear]}
                onPress={() => {
                  const [, m, d] = selectedDate.split('-');
                  const date = `${y}-${m}-${d}`;

                  setSelectedDate(date);
                  setSelectedYear(y);

                  const { from, to } = getYearRange(date);
                  setRange(from, to);
                  closeCalendar();
                }}
              >
                {y}
              </Text>
            );
          })}
        </View>
      )}

    </View>
  );
};

export default CalendarComp;