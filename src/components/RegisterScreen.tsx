import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView
} from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const register = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !password || !confirm) {
      Alert.alert('Қате', 'Барлық өрістерді толтырыңыз');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Қате', 'Email дұрыс емес');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Қате', 'Құпиясөз кемінде 6 таңба болуы керек');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Қате', 'Құпиясөздер сәйкес келмейді');
      return;
    }
    navigation.navigate('Verify', { email });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>iBank</Text>
      <Text style={styles.title}>Тіркелу</Text>
      <Text style={styles.subtitle}>Жаңа аккаунт жасаңыз</Text>

      <Text style={styles.label}>Аты-жөніңіз</Text>
      <TextInput style={styles.input} placeholder="Аты-жөніңіз"
        value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="example@gmail.com"
        keyboardType="email-address" autoCapitalize="none"
        value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Телефон</Text>
      <TextInput style={styles.input} placeholder="+7 777 123 45 67"
        keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

      <Text style={styles.label}>Құпиясөз</Text>
      <TextInput style={styles.input} placeholder="Құпиясөз"
        secureTextEntry value={password} onChangeText={setPassword} />

      <Text style={styles.label}>Құпиясөзді қайталау</Text>
      <TextInput style={styles.input} placeholder="Қайталаңыз"
        secureTextEntry value={confirm} onChangeText={setConfirm} />

      <TouchableOpacity style={styles.button} onPress={register}>
        <Text style={styles.buttonText}>Тіркелу</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Аккаунтыңыз бар ма? Кіру</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F4F7FF', padding: 25, justifyContent: 'center' },
  logo: { fontSize: 34, fontWeight: 'bold', color: '#165DDE', textAlign: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#14213D', marginTop: 20 },
  subtitle: { color: '#68758C', marginBottom: 25, fontSize: 16 },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8, color: '#14213D' },
  input: {
    backgroundColor: 'white', padding: 15,
    borderRadius: 12, marginBottom: 15,
    borderWidth: 1, borderColor: '#E0E6F0'
  },
  button: { backgroundColor: '#165DDE', padding: 18, borderRadius: 14, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#165DDE', textAlign: 'center', marginTop: 25 }
});