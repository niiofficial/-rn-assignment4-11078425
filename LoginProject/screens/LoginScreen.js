import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    Alert.alert('Login Button Pressed', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* Simulated Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Icon name="signal" size={18} color="#000" style={styles.icon} />
            <Icon name="wifi" size={18} color="#000" style={styles.icon} />
            <Icon name="battery-full" size={18} color="#000" style={styles.icon} />
          </View>
        </View>

        {/* Login Content */}
        <View style={styles.content}>
          <Text style={styles.nameText}>Richmond</Text>
          <Text style={styles.welcomeText}>Welcome back! 👋</Text>
          <Text style={styles.infoText}>Let's login. Apply to jobs</Text>
        </View>

        {/* Login Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Continue with Icons */}
        <View style={styles.continueWith}>
          <Text style={styles.continueText}>or continue with</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="apple" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="google" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="facebook" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 44 : 0, // iOS status bar height
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F5FCFF',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5, // Adjusted spacing between icons
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    height: 52,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 35,
    
  },
  continueWith: {
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default App;
