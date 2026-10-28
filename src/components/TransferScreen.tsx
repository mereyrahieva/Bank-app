
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView
} from 'react-native';

export default function TransferScreen({ navigation, route }: any) {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const balance = Number(route?.params?.balance ?? 125000);

  const transfer = () => {
    const sum = Number(amount.replace(',', '.'));
    const digits = phone.replace(/\D/g, '');

    if (digits.length < 10) {
      Alert.alert('Қате', 'Телефон нөмірін дұрыс енгізіңіз');
      return;
    }

    if (!Number.isFinite(sum) || sum <= 0) {
      Alert.alert('Қате', 'Дұрыс соманы енгізіңіз');
      return;
    }

    if (sum > balance) {
      Alert.alert('Қате', 'Баланс жеткіліксіз');
      return;
    }

    Alert.alert(
      'Демо аударым',
      `${sum.toLocaleString('ru-RU')} ₸ аударымы көрсетілді. Нақты ақша жіберілген жоқ.`,
      [{
        text: 'OK',
        onPress: () => navigation.navigate('Home', {
          balance: balance - sum
        })
      }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ақша аудару</Text>
      <Text style={styles.subtitle}>Телефон нөмірі арқылы</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Қолжетімді баланс (демо)</Text>
        <Text style={styles.balance}>{balance.toLocaleString('ru-RU')} ₸</Text>
      </View>

      <Text style={styles.label}>Алушының телефоны</Text>
      <TextInput
        style={styles.input}
        placeholder="+7 777 123 45 67"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Аударым сомасы</Text>
      <TextInput
        style={styles.input}
        placeholder="0 ₸"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Пікір (міндетті емес)</Text>
      <TextInput
        style={styles.input}
        placeholder="Аударым мақсаты"
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.button} onPress={transfer}>
        <Text style={styles.buttonText}>Аудару</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Артқа қайту</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F4F7FF', padding: 25 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#14213D', marginTop: 35 },
  subtitle: { fontSize: 16, color: '#68758C', marginTop: 8, marginBottom: 25 },
  card: { backgroundColor: '#165DDE', padding: 25, borderRadius: 18, marginBottom: 30 },
  cardLabel: { color: '#D9E5FF' },
  balance: { fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 10 },
  label: { fontSize: 15, color: '#14213D', fontWeight: '600', marginBottom: 8 },
  input: {
    backgroundColor: 'white', padding: 17,
    borderRadius: 12, borderWidth: 1,
    borderColor: '#E0E6F0', marginBottom: 20
  },
  button: { backgroundColor: '#165DDE', padding: 18, borderRadius: 14, alignItems: 'center', marginTop: 15 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#165DDE', textAlign: 'center', marginTop: 25 }
});
