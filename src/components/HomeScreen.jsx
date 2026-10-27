import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, ScrollView, StatusBar, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const transactions = [
  {
    id: '1',
    title: 'Супермаркет',
    category: 'Азық-түлік',
    amount: '-12 500 ₸',
    icon: 'cart-outline',
    color: '#FFF0E5',
    iconColor: '#F59A43',
    date: 'Бүгін, 14:30',
  },
  {
    id: '2',
    title: 'Жалақы',
    category: 'Кіріс',
    amount: '+350 000 ₸',
    icon: 'arrow-down-outline',
    color: '#E5F8EF',
    iconColor: '#20B879',
    date: 'Кеше, 09:15',
  },
  {
    id: '3',
    title: 'Кофехана',
    category: 'Тамақтану',
    amount: '-3 200 ₸',
    icon: 'cafe-outline',
    color: '#F1E9FF',
    iconColor: '#9565E8',
    date: '25 қазан, 12:45',
  },
  {
    id: '4',
    title: 'Ұялы байланыс',
    category: 'Қызметтер',
    amount: '-4 500 ₸',
    icon: 'phone-portrait-outline',
    color: '#E6F1FF',
    iconColor: '#165DDE',
    date: '24 қазан, 18:20',
  },
];

export default function HomeScreen({ navigation }) {
  const [showBalance, setShowBalance] = useState(true);

  const demoAlert = (title) => {
    Alert.alert(
      title,
      'Бұл функция келесі нұсқада қосылады.'
    );
  };

  const Action = ({ icon, title, onPress, background }) => (
    <TouchableOpacity style={styles.action} onPress={onPress}>
      <View style={[styles.actionIcon, { backgroundColor: background }]}>
        <Ionicons name={icon} size={25} color="#165DDE" />
      </View>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F9FC" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={25} color="#165DDE" />
            </View>
            <View>
              <Text style={styles.greeting}>Қайырлы күн!</Text>
              <Text style={styles.username}>Қолданушы</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.notification}
            onPress={() => demoAlert('Хабарламалар')}
          >
            <Ionicons
              name="notifications-outline"
              size={25}
              color="#172B4D"
            />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Менің қаржым</Text>

        <View style={styles.bankCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardBrand}>iBank</Text>
            <Ionicons name="wifi" size={27} color="#FFFFFF" />
          </View>

          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Жалпы теңгерім</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? 'eye-outline' : 'eye-off-outline'}
                size={22}
                color="#DCE8FF"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.balance}>
            {showBalance ? '1 250 800 ₸' : '•••••• ₸'}
          </Text>

          <View style={styles.cardBottom}>
            <View>
              <Text style={styles.cardNumber}>••••  ••••  ••••  4582</Text>
              <Text style={styles.cardHolder}>IBANK CARD</Text>
            </View>
            <View style={styles.mastercard}>
              <View style={[styles.mcCircle, { backgroundColor: '#FF6558' }]} />
              <View style={[
                styles.mcCircle,
                { backgroundColor: '#FFB443', marginLeft: -12 }
              ]} />
            </View>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Action
            icon="arrow-up-outline"
            title="Аудару"
            background="#E5EEFF"
            onPress={() => navigation.navigate('Transfer')}
          />
          <Action
            icon="wallet-outline"
            title="Төлемдер"
            background="#E7F4FF"
            onPress={() => demoAlert('Төлемдер')}
          />
          <Action
            icon="add-outline"
            title="Толықтыру"
            background="#E8F7F1"
            onPress={() => demoAlert('Шотты толықтыру')}
          />
          <Action
            icon="grid-outline"
            title="Басқалары"
            background="#F0ECFF"
            onPress={() => demoAlert('Қосымша қызметтер')}
          />
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statsTop}>
            <View>
              <Text style={styles.statsLabel}>Осы айдағы шығыстар</Text>
              <Text style={styles.statsAmount}>185 450 ₸</Text>
            </View>
            <View style={styles.statsIcon}>
              <Ionicons
                name="stats-chart-outline"
                size={24}
                color="#165DDE"
              />
            </View>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.statsBottom}>
            <Text style={styles.statsSmall}>Айлық бюджет: 300 000 ₸</Text>
            <Text style={styles.statsPercent}>62%</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Соңғы операциялар</Text>
          <TouchableOpacity onPress={() => demoAlert('Операциялар тарихы')}>
            <Text style={styles.seeAll}>Барлығы</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactions}>
          {transactions.map((item) => (
            <View key={item.id} style={styles.transaction}>
              <View style={[
                styles.transactionIcon,
                { backgroundColor: item.color }
              ]}>
                <Ionicons
                  name={item.icon}
                  size={23}
                  color={item.iconColor}
                />
              </View>

              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>

              <Text style={[
                styles.transactionAmount,
                item.amount.startsWith('+') && { color: '#20B879' }
              ]}>
                {item.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#165DDE" />
          <Text style={styles.activeNavText}>Басты бет</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Transfer')}
        >
          <Ionicons name="swap-horizontal-outline" size={24} color="#9AA6B7" />
          <Text style={styles.navText}>Аударым</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => demoAlert('Карталар')}
        >
          <Ionicons name="card-outline" size={24} color="#9AA6B7" />
          <Text style={styles.navText}>Карталар</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => demoAlert('Профиль')}
        >
          <Ionicons name="person-outline" size={24} color="#9AA6B7" />
          <Text style={styles.navText}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#E4EDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 13,
    color: '#8290A5',
    marginBottom: 4,
  },
  username: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172B4D',
  },
  notification: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6A6A',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#172B4D',
  },
  bankCard: {
    marginTop: 18,
    backgroundColor: '#165DDE',
    borderRadius: 24,
    padding: 24,
    minHeight: 220,
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#165DDE',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBrand: {
    fontSize: 25,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#C7DAFF',
  },
  balance: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 5,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 25,
  },
  cardNumber: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  cardHolder: {
    fontSize: 11,
    color: '#C7DAFF',
    marginTop: 8,
    letterSpacing: 1,
  },
  mastercard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mcCircle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    opacity: 0.95,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 28,
  },
  action: {
    alignItems: 'center',
    width: '24%',
  },
  actionIcon: {
    width: 62,
    height: 62,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#263B59',
    textAlign: 'center',
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    marginBottom: 30,
  },
  statsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsLabel: {
    fontSize: 13,
    color: '#8290A5',
  },
  statsAmount: {
    fontSize: 24,
    fontWeight: '800',
    color: '#172B4D',
    marginTop: 7,
  },
  statsIcon: {
    width: 47,
    height: 47,
    backgroundColor: '#EAF2FF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBackground: {
    height: 9,
    backgroundColor: '#E9EFF8',
    borderRadius: 6,
    marginTop: 22,
    overflow: 'hidden',
  },
  progressFill: {
    width: '62%',
    height: '100%',
    backgroundColor: '#165DDE',
    borderRadius: 6,
  },
  statsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statsSmall: {
    fontSize: 12,
    color: '#8290A5',
  },
  statsPercent: {
    fontSize: 12,
    fontWeight: '700',
    color: '#165DDE',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  seeAll: {
    fontSize: 14,
    color: '#165DDE',
    fontWeight: '700',
  },
  transactions: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 17,
    paddingVertical: 5,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#172B4D',
  },
  transactionDate: {
    fontSize: 11,
    color: '#9AA6B7',
    marginTop: 5,
  },
  transactionAmount: {
    fontSize: 13,
    fontWeight: '800',
    color: '#172B4D',
  },
  bottomNav: {
    height: 75,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEF1F6',
    paddingBottom: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flex: 1,
  },
  navText: {
    fontSize: 11,
    color: '#9AA6B7',
  },
  activeNavText: {
    fontSize: 11,
    color: '#165DDE',
    fontWeight: '700',
  },
});