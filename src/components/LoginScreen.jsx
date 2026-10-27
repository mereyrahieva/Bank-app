import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView, ScrollView,
  Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Қате', 'Барлық өрістерді толтырыңыз.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Қате', 'Электрондық пошта дұрыс емес.');
      return;
    }

    // Демонстрациялық кіру. Серверлік авторизация жоқ.
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#172B4D" />
          </TouchableOpacity>

          <View style={styles.logo}>
            <Ionicons name="wallet" size={35} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Қош келдіңіз!</Text>
          <Text style={styles.subtitle}>
            Аккаунтыңызға кіру үшін деректеріңізді енгізіңіз.
          </Text>

          <Text style={styles.label}>Электрондық пошта</Text>
          <View style={styles.inputBox}>
            <Ionicons name="mail-outline" size={21} color="#8B9AB0" />
            <TextInput
              style={styles.input}
              placeholder="example@mail.com"
              placeholderTextColor="#A0AABD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Text style={styles.label}>Құпиясөз</Text>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={21} color="#8B9AB0" />
            <TextInput
              style={styles.input}
              placeholder="Құпиясөзді енгізіңіз"
              placeholderTextColor="#A0AABD"
              secureTextEntry={!visible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Ionicons
                name={visible ? 'eye-outline' : 'eye-off-outline'}
                size={21}
                color="#8B9AB0"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>
              Құпиясөзді ұмыттыңыз ба?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Кіру</Text>
            <Ionicons name="arrow-forward" size={21} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.or}>немесе</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            style={styles.demoButton}
            onPress={() => navigation.replace('Home')}
          >
            <Ionicons name="person-circle-outline" size={23} color="#165DDE" />
            <Text style={styles.demoText}>Демо режимде кіру</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Аккаунтыңыз жоқ па? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Тіркелу</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flexGrow: 1, paddingHorizontal: 25, paddingBottom: 35 },
  back: { marginTop: 25, marginBottom: 45 },
  logo: {
    width: 70, height: 70, borderRadius: 22,
    backgroundColor: '#165DDE',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 28,
  },
  title: { fontSize: 31, fontWeight: '800', color: '#172B4D' },
  subtitle: {
    fontSize: 15, color: '#8290A5',
    lineHeight: 24, marginTop: 12, marginBottom: 35,
  },
  label: {
    fontSize: 14, fontWeight: '700',
    color: '#263B59', marginBottom: 10,
  },
  inputBox: {
    height: 58, backgroundColor: '#F6F8FC',
    borderRadius: 16, flexDirection: 'row',
    alignItems: 'center', paddingHorizontal: 16,
    gap: 12, marginBottom: 23,
    borderWidth: 1, borderColor: '#EDF0F6',
  },
  input: { flex: 1, fontSize: 15, color: '#172B4D' },
  forgot: { alignSelf: 'flex-end', marginBottom: 30 },
  forgotText: { color: '#165DDE', fontSize: 14, fontWeight: '700' },
  button: {
    height: 58, borderRadius: 17,
    backgroundColor: '#165DDE',
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', gap: 12,
  },
  buttonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  separator: {
    flexDirection: 'row', alignItems: 'center',
    marginVertical: 30, gap: 15,
  },
  line: { flex: 1, height: 1, backgroundColor: '#E6EBF2' },
  or: { color: '#9AA6B7', fontSize: 14 },
  demoButton: {
    height: 56, borderWidth: 1, borderColor: '#DCE6F8',
    borderRadius: 17, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', gap: 10,
  },
  demoText: { color: '#165DDE', fontWeight: '700', fontSize: 15 },
  footer: {
    flexDirection: 'row', justifyContent: 'center',
    marginTop: 40, flexWrap: 'wrap',
  },
  footerText: { color: '#8290A5', fontSize: 14 },
  link: { color: '#165DDE', fontSize: 14, fontWeight: '700' },
});