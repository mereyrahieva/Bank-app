
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, SafeAreaView
} from 'react-native';

export default function VerifyScreen({ navigation, route }: any) {
  const [code, setCode] = useState('');
  const email = route?.params?.email || '';

  const verify = () => {
    if (code.length !== 4 || !/^\d{4}$/.test(code)) {
      Alert.alert('Қате', '4 саннан тұратын код енгізіңіз');
      return;
    }

    Alert.alert('Демо', 'Код енгізілді. Серверлік тексеру қосылмаған.');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.icon}>📩</Text>
        <Text style={styles.title}>Растау коды</Text>
        <Text style={styles.subtitle}>
          {email ? `${email} мекенжайына арналған растау` : 'Растау кодын енгізіңіз'}
        </Text>
        <Text style={styles.note}>Демо режим: нақты код жіберілмейді.</Text>

        <TextInput
          style={styles.input}
          placeholder="0000"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
          textAlign="center"
        />

        <TouchableOpacity style={styles.button} onPress={verify}>
          <Text style={styles.buttonText}>Растау</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Кіру бетіне қайту</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FF', padding: 25 },
  center: { flex: 1, justifyContent: 'center' },
  icon: { fontSize: 75, textAlign: 'center', marginBottom: 25 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#14213D' },
  subtitle: { fontSize: 16, color: '#68758C', textAlign: 'center', marginTop: 15 },
  note: { color: '#68758C', textAlign: 'center', marginTop: 12 },
  input: {
    backgroundColor: 'white', borderRadius: 14,
    padding: 18, fontSize: 28, letterSpacing: 12,
    marginVertical: 30, borderWidth: 1, borderColor: '#E0E6F0'
  },
  button: { backgroundColor: '#165DDE', padding: 18, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#165DDE', textAlign: 'center', marginTop: 25 }
});
