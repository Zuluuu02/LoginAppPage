import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const handleLoginPress = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  const handleCreateAccountPress = () => {
    navigation.replace('RegisterScreen');
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
<<<<<<< HEAD
      <Header>Sign in</Header>
=======
      <Header>Hello, Fellow Traiblazer!</Header>
>>>>>>> f40cd399b3913baf5db5584905ef56f79b02f451
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address" description={undefined}      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
<<<<<<< HEAD
        secureTextEntry description={undefined}      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password ?</Text>
=======
        secureTextEntry
        onSubmitEditing={handleLoginPress} description={undefined}      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={[styles.forgot, { fontWeight: 'bold' }]}>Forgot your password?</Text>
>>>>>>> f40cd399b3913baf5db5584905ef56f79b02f451
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleLoginPress} style={undefined}>
        Log in
      </Button>
      <View style={styles.row}>
        <Text>Don’t Have an Account Yet?</Text>
      </View>
      <View style={styles.row}>
<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Create an Account</Text>
=======
        <TouchableOpacity onPress={handleCreateAccountPress}>
          <Text style={styles.link}>Create</Text>
>>>>>>> f40cd399b3913baf5db5584905ef56f79b02f451
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;