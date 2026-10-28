import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, SafeAreaView
} from 'react-native';

const slides = [
  {
    icon: '🔒',
    title: 'Қауіпсіз банкинг',
    description: 'Ақшаңыз бен деректеріңіз сенімді қорғалады.'
  },
  {
    icon: '💸',
    title: 'Жылдам аударым',
    description: 'Ақшаны бірнеше секундта аударыңыз.'
  },
  {
    icon: '📊',
    title: 'Қаржыны басқару',
    description: 'Шығындарыңызды бақылап отырыңыз.'
  }
];

export default function OnboardingScreen({ navigation }: any) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.skip}
      >
        <Text style={styles.link}>Өткізіп жіберу</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.icon}>{slide.icon}</Text>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.description}>{slide.description}</Text>
        <Text style={styles.counter}>{index + 1} / 3</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>
          {index === 2 ? 'Кіру' : 'Келесі'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FF', padding: 25 },
  skip: { alignSelf: 'flex-end', marginTop: 15 },
  link: { color: '#165DDE', fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 100, marginBottom: 35 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#14213D' },
  description: {
    fontSize: 16, color: '#68758C',
    textAlign: 'center', marginTop: 18
  },
  counter: { marginTop: 35, color: '#165DDE', fontSize: 18 },
  button: {
    backgroundColor: '#165DDE', padding: 18,
    borderRadius: 15, alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});