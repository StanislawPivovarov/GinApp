import React, { useEffect, useRef, useState } from "react";
import { View, Text, SafeAreaView, TextInput, TextInputProps, Platform, ScrollView, StyleSheet } from "react-native";
import { Accounts } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Button, InputItem } from "@ant-design/react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { TouchableOpacity } from "react-native";
import { auth } from "../../auth/firebase";
import  Auth  from "firebase/auth";
import { browserLocalPersistence, getAuth, setPersistence, signOut, updateCurrentUser } from "firebase/auth";


try {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
  })
}
catch (err) {

}

console.log(auth.currentUser)
const Account = ({ navigation }: any) => {
  const recapchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device." }
    : undefined);


  const time = new Date().getHours();
  var good;
  if (time >= 7 && time < 12) {
    good = "Доброе утро ";
  }
  if (time >= 12 && time < 18) {
    good = "Добрый день ";
  }

  if (time >= 18 && time <= 22) {
    good = "Добрый вечер ";
  }
  return (
    <SafeAreaView>
      <FirebaseRecaptchaVerifierModal
        ref={recapchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <ScrollView style={Accounts.SignUp}>
        <Text style={Accounts.day}>{good}</Text>
        <Text style={Accounts.text}>Похоже, вы не авторизировались! Исправим?</Text>
        <Text style={Accounts.capchainfo}>После отправки номера потребуется пройти ReКапчу, это делается для безопасности</Text>
        <View style={Accounts.form}>
          <Text style={Accounts.formTelText}>Ваш номер телефона</Text>
          <TextInput
            placeholder="+79123456789"
            autoFocus
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={(phoneNumber: any) => setPhoneNumber(phoneNumber)}
            style={Accounts.formTel}
          />
          <Button disabled={!phoneNumber} style={Accounts.formSend}
            onPress={async () => {
              try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                const verificationId = await phoneProvider.verifyPhoneNumber(
                  phoneNumber,
                  //@ts-ignore
                  recapchaVerifier.current
                );
                setVerificationId(verificationId);
                showMessage({
                  text: "Код верификации был отправлен на Ваш номер.",
                });
              } catch (err) {
              }
            }}
          >Отправить проверочный код</Button>

          <Text style={Accounts.formTelText}>Код верификации</Text>
          <TextInput
            style={Accounts.formTel}
            editable={!!verificationId}
            keyboardType="phone-pad"
            placeholder="123456"
            onChangeText={setVerificationCode}
          />
          <Button
            disabled={!verificationId}
            style={Accounts.formSend}
            onPress={async () => {
              try {
                const credential = firebase.auth.PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                await firebase.auth().signInWithCredential(credential);
                navigation.navigate('Страница аккаунта')
                setPhoneNumber("");
                setVerificationCode("")
              } catch (err) {
                showMessage({ text: "Что-то пошло не так" });
              }
            }}
          >Проверить код</Button>
        </View>
        {message ? (
          <TouchableOpacity
            //@ts-ignore
            style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
            onPress={() => showMessage(undefined)}>

            <Text style={{ color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
              {message.text}
            </Text>
          </TouchableOpacity>
        ) : undefined}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Account;
