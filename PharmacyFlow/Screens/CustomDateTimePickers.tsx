import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDatePicker = ({ date, onChange }) => {
  const [show, setShow] = useState(false);

  const onChangeInternal = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('US-en', options);
  };

  return (
    <View>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setShow(true)}>
        <Text style={styles.pickerText}>{formatDate(date)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeInternal}
        />
      )}
    </View>
  );
};

const CustomTimePicker = ({ time, onChange }) => {
  const [show, setShow] = useState(false);

  const onChangeInternal = (event, selectedTime) => {
    setShow(Platform.OS === 'ios');
    if (selectedTime) {
      onChange(selectedTime);
    }
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <View>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setShow(true)}>
        <Text style={styles.pickerText}>{formatTime(time)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeInternal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  pickerText: {
    fontSize: 16,
    color: '#333',
  },
});

export { CustomDatePicker, CustomTimePicker };
