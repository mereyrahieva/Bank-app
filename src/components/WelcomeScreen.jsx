import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#165DDE" />

      <View style={styles.top}>
        <View style={styles.logo}>
          <Ionicons name="wallet" size={38} color="#165DDE" />
        </View>
        <Text style={styles.brand}>iBank</Text>
        <Text style={styles.tagline}>
          Сенің цифрлық банкің
        </Text>
      </View>

      <View style={styles.illustration}>
        <View style={styles.circle}>
          <Ionicons name="card" size={100} color="#FFFFFF" />
        </View>
        <View style={styles.smallIcon}>
          <Ionicons name="shield-checkmark" size={28} color="#165DDE" />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>
          Қаржыңызды оңай басқарыңыз
        </Text>
        <Text style={styles.description}>
          Ақша аударыңыз, төлем жасаңыз және
          барлық қаржыңызды бір жерден бақылаңыз.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Onboarding')}
        >
          <Text style={styles.buttonText}>Бастау</Text>
          <Ionicons name="arrow-forward" size={22} color="#165DDE" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>
            Аккаунтыңыз бар ма? Кіру
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#165DDE',
    paddingHorizontal: 25,
  },
  top: {
    alignItems: 'center',
    marginTop: 55,
  },
  logo: {
    width: 78,
    height: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 14,
  },
  tagline: {
    fontSize: 15,
    color: '#DCE8FF',
    marginTop: 5,
  },
  illustration: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#397AF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 18,
    borderColor: '#2B6DE5',
  },
  smallIcon: {
    position: 'absolute',
    right: 45,
    bottom: 55,
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 18,
  },
  bottom: {
    paddingBottom: 38,
  },
  title: {
    fontSize: 29,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 37,
  },
  description: {
    fontSize: 15,
    color: '#DCE8FF',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 14,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFFFFF',
    height: 58,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#165DDE',
  },
  loginButton: {
    marginTop: 23,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});