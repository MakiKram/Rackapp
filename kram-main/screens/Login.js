import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useReducer, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from "react-native-animatable"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS, SIZES, icons } from '../constants'
import Input from '../components/Input'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import Button from "../components/Button"
import SocialButton from '../components/SocialButton'



const isTestMode = true

const initialState = {
  inputValues: {
    ID: isTestMode ? '123456' : '',
    password: isTestMode ? '**********' : '',
  },
  inputValidities: {
    email: false,
    password: false,
    ID: false,
    Username: false,
  },
  formIsValid: false,
}


const Login = ({ navigation }) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const [isChecked, setChecked] = useState(false)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )
  const facebookAuthHandler = () => {

  }

  const googleAuthHandler = () => {
}

const twitterAuthHandler = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <StatusBar hidden />
        <View style={styles.header}>
        <Text style={[styles.headerTitle, { fontFamily: 'Roboto', fontWeight: 'bold' }]}>Rack<Text style={{ color: 'green' }}>POS</Text></Text>
        <View>
        <Text style={styles.subHeaderTitle}><Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: COLORS.black }}>Price Inquiry</Text></Text>
        <Text style={[styles.welcome, { color: 'green' }]}>Hi, Welcome Back!</Text>
</View>

        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <KeyboardAwareScrollView>
            <Input
              id="Store ID"
              placeholder="Store ID"
              placeholderTextColor={COLORS.black}
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities["Store ID"]}
              keyboardType="email-address"
            />
            <Input
              id="Username"
              placeholder="Username"
              placeholderTextColor={COLORS.black}
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['Username']}
              keyboardType="email-address"
            />
            <Input
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['password']}
              autoCapitalize="none"
              id="password"
              placeholder="Password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
            />
            

            <View style={styles.forgotpassword}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Verification")}>
                <Text style={{ ...FONTS.body4, color: COLORS.primary }}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>



            <Button
              title="LOGIN"
              isLoading={isLoading}
              onPress={() => navigation.navigate('Login')}
            /><View style={styles.Rack}>
                  
              <View style={styles.line} />
              <View style={styles.line} />
            </View>

            <View style={{
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: SIZES.padding2
            }}>

              
              <View style={styles.Login}>

              </View>


              <Image source={require('../assets/RackApp.png')} style={{ width: 200, height: 60, marginTop: 90,}} />


          
              
            </View>
          </KeyboardAwareScrollView>
        </Animatable.View>
      </View>
    </SafeAreaView>
  )
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#E4F3E3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4
  },
  headerTitle: {
    fontSize: 30,
    color: COLORS.black,
  },
  subHeaderTitle: {
    fontSize: 25,
    color: COLORS.black,
    marginTop: -10,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
      fontWeight: 'bold',
      marginTop: 90,
      marginRight: 150,
      textAlign: 'left',
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 0,
    
  },
inputHeader:{
    textTransform: 'uppercase',
    ...FONTS.body4,
    marginVertical: 4
  },
  forgotpassword: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: -20,
    marginRight: 180,
  },
  
  Rack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginRight: 180,
   
    
  },
  
})
export default Login