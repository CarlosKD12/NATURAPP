// app/auth/register.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,
         ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../src/hooks/useAuth';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, loading } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    // Validaciones
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await register(name, email, password);
      router.replace('/(tabs)/home');
    } catch (err) {
      Alert.alert('Error de registro', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Crear Cuenta</Text>
      <Text style={styles.subtitle}>
        Regístrate para empezar a disfrutar
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Nombre completo"
        value={name} 
        onChangeText={setName}
        autoCapitalize="words"
      />

      <TextInput 
        style={styles.input}
        placeholder="Correo electrónico"
        value={email} 
        onChangeText={setEmail}
        keyboardType="email-address" 
        autoCapitalize="none"
      />

      <TextInput 
        style={styles.input}
        placeholder="Contraseña"
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry
      />

      <TextInput 
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleRegister} 
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Registrarse</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.link}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF',
    padding: 24, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#1A5276', 
    textAlign: 'center' 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#7F8C8D',
    textAlign: 'center', 
    marginTop: 8,
    marginBottom: 32 
  },
  input: { 
    backgroundColor: '#F8F9FA', 
    borderWidth: 1,
    borderColor: '#D5DBDB', 
    borderRadius: 10,
    padding: 14, 
    fontSize: 16, 
    marginBottom: 14 
  },
  button: { 
    backgroundColor: '#1A5276', 
    padding: 16,
    borderRadius: 12, 
    alignItems: 'center',
    marginTop: 10 
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 17,
    fontWeight: 'bold' 
  },
  link: { 
    color: '#2E86C1', 
    textAlign: 'center',
    marginTop: 24, 
    fontSize: 14 
  }
});