import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const slides = [
  {
    icon: 'swap-horizontal',
    title: 'Жылдам ақша аударымдары',
    description:
      'Достарыңызға және жақындарыңызға бірнеше секунд ішінде ақша аударыңыз.',
  },
  {
    icon: 'shield-checkmark',
    title: 'Қауіпсіз банкинг',
    description:
      'Қаражатыңыз бен жеке деректеріңіз сенімді қорғалады.',
  },
  {
    icon: 'stats-chart',
    title: 'Қаржыңызды бақылаңыз',
    description:
      'Кірістер мен шығыстарды талдап, қаржылық мақсаттарыңызға жетіңіз.',
  },
];

export default function OnboardingScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.navigate('Register');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Text style={styles.brand}>iBank</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Өткізіп жіберу</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.visual}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Ionicons
              name={current.icon}
              size={105}
              color="#FFFFFF"
            />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{current.title}</Text>
        <Text style={styles.description}>{current.description}</Text>

        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={next}>
          <Text style={styles.buttonText}>
            {index === slides.length - 1 ? 'Бастау' : 'Келесі'}
          </Text>
          <Ionicons name="arrow-forward" size={21} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  brand: {
    fontSize: 27,
    fontWeight: '800',
    color: '#165DDE',
  },
  skip: {
    fontSize: 14,
    color: '#8290A5',
    fontWeight: '600',
  },
  visual: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 285,
    height: 285,
    borderRadius: 150,
    backgroundColor: '#E9F1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#165DDE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#165DDE',
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#172B4D',
    textAlign: 'center',
    lineHeight: 36,
  },
  description: {
    fontSize: 15,
    color: '#7B8BA1',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16,
    minHeight: 75,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 32,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#D5DDE9',
  },
  activeDot: {
    width: 28,
    backgroundColor: '#165DDE',
  },
  button: {
    height: 58,
    borderRadius: 17,
    backgroundColor: '#165DDE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});