import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView, ScrollView,
  KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransferScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');

  const balance = 1250800;

  const quickAmounts = [5000, 10000, 20000, 50000];

  const formatMoney = (value) => {
    return Number(value).toLocaleString('ru-RU');
  };

  const transfer = () => {
    const numericAmount = Number(amount);

    if (phone.replace(/\D/g, '').length < 10) {
      Alert.alert(
        'Қате',
        'Алушының телефон нөмірін дұрыс енгізіңіз.'
      );
      return;
    }

    if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      Alert.alert(
        'Қате',
        'Аударым сомасын дұрыс енгізіңіз.'
      );
      return;
    }

    if (numericAmount > balance) {
      Alert.alert(
        'Қаражат жеткіліксіз',
        'Картаңыздағы теңгерім жеткіліксіз.'
      );
      return;
    }

    Alert.alert(
      'Аударымды растау',
      `Алушы: ${phone}\nСома: ${formatMoney(numericAmount)} ₸\nКомиссия: 0 ₸`,
      [
        {
          text: 'Бас тарту',
          style: 'cancel',
        },
        {
          text: 'Растау',
          onPress: () => {
            Alert.alert(
              'Демо аударым',
              'Аударым сәтті имитацияланды. Нақты ақша жіберілген жоқ.',
              [
                {
                  text: 'Дайын',
                  onPress: () => navigation.navigate('Home'),
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#172B4D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Ақша аудару</Text>

          <TouchableOpacity
            style={styles.historyButton}
            onPress={() =>
              Alert.alert(
                'Аударымдар тарихы',
                'Бұл бөлім келесі нұсқада қосылады.'
              )
            }
          >
            <Ionicons name="time-outline" size={24} color="#172B4D" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.sectionLabel}>Қай шоттан</Text>

          <View style={styles.sourceCard}>
            <View style={styles.miniCardIcon}>
              <Ionicons name="card" size={25} color="#FFFFFF" />
            </View>

            <View style={styles.sourceInfo}>
              <Text style={styles.sourceName}>iBank картасы</Text>
              <Text style={styles.sourceNumber}>•••• 4582</Text>
            </View>

            <View style={styles.sourceBalance}>
              <Text style={styles.sourceBalanceText}>1 250 800 ₸</Text>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#165DDE"
              />
            </View>
          </View>

          <Text style={styles.sectionLabel}>Алушы</Text>

          <View style={styles.recipientCard}>
            <View style={styles.recipientIcon}>
              <Ionicons name="person-outline" size={26} color="#165DDE" />
            </View>
            <View style={styles.recipientInfo}>
              <Text style={styles.recipientTitle}>
                Телефон нөмірі бойынша
              </Text>
              <Text style={styles.recipientSubtitle}>
                Қазақстандағы нөмірге аудару
              </Text>
            </View>
          </View>

          <Text style={styles.inputLabel}>Алушының телефон нөмірі</Text>
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
            <Ionicons name="people-outline" size={22} color="#165DDE" />
          </View>

          <Text style={styles.sectionLabel}>Аударым сомасы</Text>

          <View style={styles.amountCard}>
            <Text style={styles.amountHint}>Соманы енгізіңіз</Text>
            <View style={styles.amountRow}>
              <TextInput
                style={styles.amountInput}
                placeholder="0"
                placeholderTextColor="#B4BED0"
                keyboardType="numeric"
                value={amount}
                onChangeText={(value) =>
                  setAmount(value.replace(/[^0-9]/g, ''))
                }
              />
              <Text style={styles.currency}>₸</Text>
            </View>
            <View style={styles.amountDivider} />
            <Text style={styles.available}>
              Қолжетімді: 1 250 800 ₸
            </Text>
          </View>

          <View style={styles.quickRow}>
            {quickAmounts.map((value) => (
              <TouchableOpacity
                key={value}
                style={styles.quickButton}
                onPress={() => setAmount(String(value))}
              >
                <Text style={styles.quickText}>
                  {formatMoney(value)} ₸
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.inputLabel}>Түсініктеме (міндетті емес)</Text>
          <View style={styles.inputBox}>
            <Ionicons
              name="chatbubble-outline"
              size={21}
              color="#8B9AB0"
            />
            <TextInput
              style={styles.input}
              placeholder="Түсініктеме жазыңыз"
              placeholderTextColor="#A0AABD"
              value={comment}
              onChangeText={setComment}
              maxLength={100}
            />
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Аударым сомасы</Text>
              <Text style={styles.summaryValue}>
                {formatMoney(amount || 0)} ₸
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Комиссия</Text>
              <Text style={styles.freeText}>0 ₸</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Жалпы сома</Text>
              <Text style={styles.totalValue}>
                {formatMoney(amount || 0)} ₸
              </Text>
            </View>
          </View>

          <View style={styles.securityInfo}>
            <Ionicons
              name="shield-checkmark-outline"
              size={21}
              color="#20B879"
            />
            <Text style={styles.securityText}>
              Аударым деректері қорғалған
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={transfer}>
            <Text style={styles.buttonText}>Ақша аудару</Text>
            <Ionicons name="arrow-forward" size={21} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.demoNote}>
            Демо режим: нақты банк операциясы орындалмайды.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    height: 75,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#172B4D',
  },
  historyButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 25,
    paddingBottom: 40,
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 15,
  },
  sourceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  miniCardIcon: {
    width: 51,
    height: 51,
    borderRadius: 15,
    backgroundColor: '#165DDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sourceInfo: {
    flex: 1,
    marginLeft: 12,
  },
  sourceName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#172B4D',
  },
  sourceNumber: {
    fontSize: 12,
    color: '#8290A5',
    marginTop: 5,
  },
  sourceBalance: {
    alignItems: 'flex-end',
    gap: 7,
  },
  sourceBalanceText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#172B4D',
  },
  recipientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 19,
    marginBottom: 24,
  },
  recipientIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipientInfo: {
    marginLeft: 13,
    flex: 1,
  },
  recipientTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#172B4D',
  },
  recipientSubtitle: {
    fontSize: 12,
    color: '#8290A5',
    marginTop: 6,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263B59',
    marginBottom: 11,
  },
  inputBox: {
    height: 59,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 27,
    borderWidth: 1,
    borderColor: '#EDF0F6',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#172B4D',
  },
  amountCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
  },
  amountHint: {
    fontSize: 13,
    color: '#8290A5',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 37,
    fontWeight: '800',
    color: '#172B4D',
    paddingVertical: 5,
  },
  currency: {
    fontSize: 32,
    fontWeight: '700',
    color: '#172B4D',
  },
  amountDivider: {
    height: 1,
    backgroundColor: '#EEF1F6',
    marginVertical: 17,
  },
  available: {
    fontSize: 13,
    color: '#8290A5',
  },
  quickRow: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 15,
    marginBottom: 28,
  },
  quickButton: {
    flex: 1,
    backgroundColor: '#EAF2FF',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  quickText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#165DDE',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 9,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#8290A5',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#172B4D',
  },
  freeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#20B879',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#EEF1F6',
    marginVertical: 9,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '800',
    color: '#172B4D',
  },
  totalValue: {
    fontSize: 19,
    fontWeight: '800',
    color: '#165DDE',
  },
  securityInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    marginTop: 23,
    marginBottom: 23,
  },
  securityText: {
    fontSize: 13,
    color: '#8290A5',
  },
  button: {
    height: 60,
    backgroundColor: '#165DDE',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  demoNote: {
    fontSize: 12,
    color: '#9AA6B7',
    textAlign: 'center',
    marginTop: 16,
  },
});