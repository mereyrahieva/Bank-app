
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function GuidePage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>iBank Guide</Text>
      <Text style={styles.subtitle}>
        Welcome to your banking guide!
      </Text>

      <Text style={styles.heading}>How to use iBank?</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. Create an Account</Text>
        <Text style={styles.description}>
          Register and securely manage your account.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Transfer Money</Text>
        <Text style={styles.description}>
          Send money quickly and easily.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. Manage Your Cards</Text>
        <Text style={styles.description}>
          View and control your bank cards.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('iBank', 'Guide completed!')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
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
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#243B80',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#243B80',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
