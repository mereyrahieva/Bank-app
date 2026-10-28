import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, SafeAreaView
} from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Қате', 'Барлық өрістерді толтырыңыз');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Қате', 'Email дұрыс емес');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>iBank</Text>
      <Text style={styles.title}>Қош келдіңіз!</Text>
      <Text style={styles.subtitle}>Аккаунтыңызға кіріңіз</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Құпиясөз</Text>
      <TextInput
        style={styles.input}
        placeholder="Құпиясөз"
        secureTextEntry={!visible}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text style={styles.link}>
          {visible ? 'Құпиясөзді жасыру' : 'Құпиясөзді көрсету'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Құпиясөзді ұмыттыңыз ба?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Кіру</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Аккаунтыңыз жоқ па? Тіркелу</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FF', padding: 25, justifyContent: 'center' },
  logo: { fontSize: 36, color: '#165DDE', fontWeight: 'bold', textAlign: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#14213D', marginTop: 30 },
  subtitle: { color: '#68758C', fontSize: 16, marginBottom: 30 },
  label: { fontSize: 15, color: '#14213D', marginBottom: 8, fontWeight: '600' },
  input: {
    backgroundColor: 'white', padding: 16,
    borderRadius: 12, marginBottom: 18,
    borderWidth: 1, borderColor: '#E0E6F0'
  },
  link: { color: '#165DDE', marginBottom: 15 },
  forgot: { color: '#165DDE', textAlign: 'right', marginBottom: 25 },
  button: { backgroundColor: '#165DDE', padding: 18, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  register: { color: '#165DDE', textAlign: 'center', marginTop: 25 }
});