// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Application Farenheit2025</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = (value) => {
    if (value === '') {
      setCelsius('');
      return;
    }
    const celsiusValue = ((parseFloat(value) - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
  };

  const convertToFahrenheit = (value) => {
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const fahrenheitValue = (parseFloat(value) * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertisseur de Température</Text>
      
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Celsius'
        value={celsius}
        onChangeText={(text) => {
          setCelsius(text);
          convertToFahrenheit(text);
        }}
      />
      
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Fahrenheit'
        value={fahrenheit}
        onChangeText={(text) => {
          setFahrenheit(text);
          convertToCelsius(text);
        }}
      />
      
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
});