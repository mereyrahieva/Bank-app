import React from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, SafeAreaView
} from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.logo}>iBank</Text>
        <Text style={styles.icon}>💳</Text>
        <Text style={styles.title}>Банкингке қош келдіңіз!</Text>
        <Text style={styles.subtitle}>
          Қаржыңызды оңай әрі қауіпсіз басқарыңыз
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={styles.buttonText}>Бастау</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Аккаунтыңыз бар ма? Кіру</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F4F7FF',
    padding: 25, justifyContent: 'space-between'
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 42, fontWeight: 'bold', color: '#165DDE' },
  icon: { fontSize: 90, marginVertical: 30 },
  title: {
    fontSize: 26, fontWeight: 'bold',
    color: '#14213D', textAlign: 'center'
  },
  subtitle: {
    fontSize: 16, color: '#68758C',
    textAlign: 'center', marginTop: 15
  },
  button: {
    backgroundColor: '#165DDE', padding: 18,
    borderRadius: 15, alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#165DDE', textAlign: 'center', marginTop: 20 }
});