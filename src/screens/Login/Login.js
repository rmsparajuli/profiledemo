import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { Textbox, Button, Icon } from '../../components'
import configs from '../../config'
import img from '../../assets'
import styles from './styles'

export default class Login extends Component {
  render() {
    return (
      <ScrollView >
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.logoView}>
            <Image resizeMode="contain" style={styles.logo} source={img.demotext} />
          </View>
          <View>
            <Text style={styles.text}>
              EMAIL
                        </Text>
            <Textbox keyboardType="email-address" placeholder={"Phone Number, email or username"} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.text}>
              PASSWORD
                        </Text>
            <Textbox secureTextEntry keyboardType="default" placeholder={"password"} />
          </View>
          <TouchableOpacity style={styles._forgetPass} onPress={() => Alert.alert('Forget Password ?')}>
            <Text style={styles.text}>
              Forget Password ?
                        </Text>
          </TouchableOpacity>
        </View>

        {/* This is for Login and skip */}
        <View style={styles._loginSkip}>
          <TouchableOpacity style={[styles._login, { backgroundColor: configs.Primary_Color_Red, }]}>
            <Text style={styles.loginskipText}>
              LOGIN
                        </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles._login, { backgroundColor: configs.Primary_Color_Blue, }]}>
            <Text style={styles.loginskipText}>
              SKIP
                        </Text>
          </TouchableOpacity>
        </View>

        {/* For Other Login ie. facebook || gmail */}

        <View style={styles._otherLoginView}>
          <View style={styles._strikeView} >
            <Text textDecorationLine style={styles._strikeLine} >
              {"                        "}
            </Text>
            <Text style={styles.textSecond} >
              Don't Have Account ?
                        </Text>
            <Text style={styles._strikeLine} >
              {"                        "}
            </Text>
          </View>
          <TouchableOpacity style={[styles._login, { backgroundColor: configs.Primary_Color_Red, marginVertical: 10 }]}>
            <Text style={styles.loginskipText}>
              SIGN UP
                        </Text>
          </TouchableOpacity>
          <View style={styles._strikeView} >
            <Text textDecorationLine style={styles._strikeLine} >
              {"                            "}
            </Text>
            <Text style={styles.textSecond} >
              Or Login with ?
                        </Text>
            <Text style={styles._strikeLine} >
              {"                            "}
            </Text>
          </View>
        </View>

        {/* Facebook and Gmail Logo */}

        <View style={styles._facebookGamilView}>
          <TouchableOpacity style={[styles._facebookGamilTouch, { backgroundColor: configs.Primary_Color_Red }]}>
            <Image
              resizeMode='center'
              source={img.googleLogo}
              style={styles._facebookGamilLogo}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles._facebookGamilTouch, { backgroundColor: configs.Primary_Color_Blue }]}>
            <Image
              resizeMode='center'
              source={img.facebookLogo}
              style={styles._facebookGamilLogo}
            />
          </TouchableOpacity>

        </View>

      </ScrollView>
    )
  }
}
