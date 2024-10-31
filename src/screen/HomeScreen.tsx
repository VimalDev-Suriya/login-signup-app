import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, screens} from '../constants';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLoginNavigation = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
      <Image source={require('../assests/banner.png')} style={styles.banner} />

      <Text style={styles.title}>Lorem ipsum dolor</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        libero accusamus sapiente tempore, quasi.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={() => handleLoginNavigation(screens.Login)}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButtonWrapper}
          onPress={() => handleLoginNavigation(screens.SignUp)}>
          <Text style={styles.signUpButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    height: 50,
    width: 150,
    marginVertical: 20,
  },
  banner: {
    height: 250,
    width: 231,
    marginVertical: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    textAlign: 'center',
    color: colors.secondary,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    width: '70%',
    marginVertical: 20,
    borderRadius: 100,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginButtonWrapper: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.primary,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  signUpButtonWrapper: {
    flex: 1,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  signUpButtonText: {
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
});
