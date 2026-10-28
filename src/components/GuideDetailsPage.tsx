
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function GuideDetailsPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Banking Guide</Text>
      <Text style={styles.subtitle}>
        Learn how to manage your money safely
      </Text>

      <View style={styles.card}>
        <Text style={styles.icon}>💳</Text>
        <Text style={styles.heading}>Card Management</Text>
        <Text style={styles.description}>
          Check your card balance, manage your cards,
          and keep track of your transactions.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>💸</Text>
        <Text style={styles.heading}>Money Transfers</Text>
        <Text style={styles.description}>
          Transfer money securely between accounts
          and send payments to other users.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>🔒</Text>
        <Text style={styles.heading}>Security Tips</Text>
        <Text style={styles.description}>
          Never share your PIN or password.
          Always protect your banking information.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>📱</Text>
        <Text style={styles.heading}>Mobile Banking</Text>
        <Text style={styles.description}>
          Access your bank account anytime,
          anywhere using the iBank application.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('iBank', 'You are ready!')}
      >
        <Text style={styles.buttonText}>Finish Guide</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#243B80',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#243B80',
  },
  description: {
    fontSize: 15,
    color: '#666',
    marginTop: 10,
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#243B80',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
