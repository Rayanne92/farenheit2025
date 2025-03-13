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



// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   const [celsius, setCelsius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('');

//   const convertToCelsius = (value) => {
//     if (value === '') {
//       setCelsius('');
//       return;
//     }
//     const celsiusValue = ((parseFloat(value) - 32) * 5) / 9;
//     setCelsius(celsiusValue.toFixed(2));
//   };

//   const convertToFahrenheit = (value) => {
//     if (value === '') {
//       setFahrenheit('');
//       return;
//     }
//     const fahrenheitValue = (parseFloat(value) * 9) / 5 + 32;
//     setFahrenheit(fahrenheitValue.toFixed(2));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Convertisseur de Température</Text>
      
//       <TextInput
//         style={styles.input}
//         keyboardType='numeric'
//         placeholder='Celsius'
//         value={celsius}
//         onChangeText={(text) => {
//           setCelsius(text);
//           convertToFahrenheit(text);
//         }}
//       />
      
//       <TextInput
//         style={styles.input}
//         keyboardType='numeric'
//         placeholder='Fahrenheit'
//         value={fahrenheit}
//         onChangeText={(text) => {
//           setFahrenheit(text);
//           convertToCelsius(text);
//         }}
//       />
      
//       <StatusBar style='auto' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//     textAlign: 'center',
//   },
// });



import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

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
      
      <Image source={require('./assets/celsius.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Celsius'
        placeholderTextColor='#ccc'
        value={celsius}
        onChangeText={(text) => {
          setCelsius(text);
          convertToFahrenheit(text);
        }}
      />
      
      <Image source={require('./assets/fahrenheit.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Fahrenheit'
        placeholderTextColor='#ccc'
        value={fahrenheit}
        onChangeText={(text) => {
          setFahrenheit(text);
          convertToCelsius(text);
        }}
      />
      
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#333',
    color: '#fff',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  }
});
