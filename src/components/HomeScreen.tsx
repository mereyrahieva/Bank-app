
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';

export default function HomeScreen({ navigation, route }: any) {
  const [showBalance, setShowBalance] = useState(true);
  const balance = route?.params?.balance ?? 125000;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Сәлеметсіз бе! 👋</Text>
        <Text style={styles.logo}>iBank</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Жалпы баланс (демо)</Text>
        <Text style={styles.balance}>
          {showBalance ? `${Number(balance).toLocaleString('ru-RU')} ₸` : '•••••• ₸'}
        </Text>
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Text style={styles.eye}>
            {showBalance ? 'Балансты жасыру' : 'Балансты көрсету'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.cardNumber}>••••  ••••  ••••  4829</Text>
      </View>

      <Text style={styles.section}>Жылдам әрекеттер</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('Transfer', { balance })}
        >
          <Text style={styles.actionIcon}>💸</Text>
          <Text style={styles.actionText}>Аудару</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}
          onPress={() => navigation.navigate('Transfer', { balance })}>
          <Text style={styles.actionIcon}>💳</Text>
          <Text style={styles.actionText}>Төлем</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Соңғы операциялар</Text>

      <View style={styles.transaction}>
        <Text style={styles.transactionIcon}>🛒</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.transactionTitle}>Сатып алу</Text>
          <Text style={styles.transactionDate}>Бүгін · Демо</Text>
        </View>
        <Text style={styles.negative}>- 4 500 ₸</Text>
      </View>

      <View style={styles.transaction}>
        <Text style={styles.transactionIcon}>💰</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.transactionTitle}>Ақша түсті</Text>
          <Text style={styles.transactionDate}>Кеше · Демо</Text>
        </View>
        <Text style={styles.positive}>+ 25 000 ₸</Text>
      </View>

      <TouchableOpacity style={styles.logout}
        onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>Шығу</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FF', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginBottom: 25 },
  greeting: { fontSize: 19, fontWeight: '600', color: '#14213D' },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#165DDE' },
  card: { backgroundColor: '#165DDE', padding: 25, borderRadius: 20 },
  cardLabel: { color: '#D9E5FF', fontSize: 15 },
  balance: { color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: 12 },
  eye: { color: 'white', marginTop: 15 },
  cardNumber: { color: '#D9E5FF', marginTop: 30, fontSize: 17 },
  section: { fontSize: 20, fontWeight: 'bold', color: '#14213D', marginTop: 30, marginBottom: 15 },
  actions: { flexDirection: 'row', gap: 15 },
  action: { flex: 1, backgroundColor: 'white', padding: 25, borderRadius: 16, alignItems: 'center' },
  actionIcon: { fontSize: 30 },
  actionText: { color: '#14213D', fontWeight: '600', marginTop: 10 },
  transaction: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'white', padding: 17,
    borderRadius: 15, marginBottom: 12
  },
  transactionIcon: { fontSize: 27, marginRight: 15 },
  transactionTitle: { fontSize: 16, fontWeight: '600', color: '#14213D' },
  transactionDate: { color: '#68758C', marginTop: 5 },
  negative: { color: '#E5484D', fontWeight: 'bold' },
  positive: { color: '#1A9D64', fontWeight: 'bold' },
  logout: { alignItems: 'center', marginVertical: 30 },
  logoutText: { color: '#E5484D', fontSize: 16 }
});
