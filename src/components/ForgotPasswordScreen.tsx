
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, SafeAreaView
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  const submit = () => {
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Қате', 'Email дұрыс енгізіңіз');
      return;
    }

    Alert.alert('Демо', 'Бұл нұсқада email жіберілмейді.');
    navigation.navigate('Verify', { email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.icon}>🔐</Text>
        <Text style={styles.title}>Құпиясөзді ұмыттыңыз ба?</Text>
        <Text style={styles.subtitle}>
          Email мекенжайыңызды енгізіңіз
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Жалғастыру</Text>
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
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#14213D' },
  subtitle: { fontSize: 16, color: '#68758C', textAlign: 'center', marginVertical: 20 },
  input: {
    backgroundColor: 'white', padding: 17,
    borderRadius: 12, borderWidth: 1,
    borderColor: '#E0E6F0', marginBottom: 20
  },
  button: { backgroundColor: '#165DDE', padding: 18, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#165DDE', textAlign: 'center', marginTop: 25 }
});
