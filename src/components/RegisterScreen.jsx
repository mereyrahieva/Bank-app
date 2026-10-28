import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView, ScrollView,
  KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const register = () => {
    if (!name.trim() || !phone.trim() || !email.trim() || !password) {
      Alert.alert('Қате', 'Барлық өрістерді толтырыңыз.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Қате', 'Электрондық пошта дұрыс емес.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      Alert.alert('Қате', 'Телефон нөмірін дұрыс енгізіңіз.');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Қате', 'Құпиясөз кемінде 8 таңбадан тұруы керек.');
      return;
    }
    if (!accepted) {
      Alert.alert('Ескерту', 'Қолдану шарттарын қабылдаңыз.');
      return;
    }

    navigation.navigate('Verify', { source: 'register', email });
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
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#172B4D" />
          </TouchableOpacity>

          <Text style={styles.title}>Аккаунт ашу</Text>
          <Text style={styles.subtitle}>
            iBank қызметтерін пайдалану үшін тіркеліңіз.
          </Text>

          <Text style={styles.label}>Аты-жөніңіз</Text>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={21} color="#8B9AB0" />
            <TextInput
              style={styles.input}
              placeholder="Аты-жөніңізді енгізіңіз"
              placeholderTextColor="#A0AABD"
              value={name}
              onChangeText={setName}
            />
          </View>

          <Text style={styles.label}>Телефон нөмірі</Text>
          <View style={styles.inputBox}>
            <Ionicons name="call-outline" size={21} color="#8B9AB0" />
            <TextInput
              style={styles.input}
              placeholder="+7 777 123 45 67"
              placeholderTextColor="#A0AABD"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

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
            />
          </View>

          <Text style={styles.label}>Құпиясөз</Text>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={21} color="#8B9AB0" />
            <TextInput
              style={styles.input}
              placeholder="Кемінде 8 таңба"
              placeholderTextColor="#A0AABD"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!visible}
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
            style={styles.terms}
            onPress={() => setAccepted(!accepted)}
          >
            <Ionicons
              name={accepted ? 'checkbox' : 'square-outline'}
              size={24}
              color="#165DDE"
            />
            <Text style={styles.termsText}>
              Қолдану шарттары мен құпиялық саясатын қабылдаймын
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonText}>Тіркелу</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Аккаунтыңыз бар ма? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Кіру</Text>
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
  back: { marginTop: 25, marginBottom: 32 },
  title: { fontSize: 31, fontWeight: '800', color: '#172B4D' },
  subtitle: {
    fontSize: 15, color: '#8290A5',
    lineHeight: 23, marginTop: 10, marginBottom: 30,
  },
  label: {
    fontSize: 14, fontWeight: '700',
    color: '#263B59', marginBottom: 10,
  },
  inputBox: {
    height: 57, borderRadius: 16,
    backgroundColor: '#F6F8FC',
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, gap: 12,
    marginBottom: 22, borderWidth: 1,
    borderColor: '#EDF0F6',
  },
  input: { flex: 1, fontSize: 15, color: '#172B4D' },
  terms: {
    flexDirection: 'row', alignItems: 'center',
    gap: 12, marginTop: 5, marginBottom: 28,
  },
  termsText: {
    flex: 1, fontSize: 13,
    color: '#6E7E95', lineHeight: 20,
  },
  button: {
    height: 58, backgroundColor: '#165DDE',
    borderRadius: 17, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  buttonText: { fontSize: 17, fontWeight: '700', color: '#FFFFFF' },
  footer: {
    flexDirection: 'row', justifyContent: 'center',
    marginTop: 28,
  },
  footerText: { color: '#8290A5', fontSize: 14 },
  link: { color: '#165DDE', fontWeight: '700', fontSize: 14 },
});