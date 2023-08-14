import { View, Text, SafeAreaView, StyleSheet,TextInput, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState,useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
const Login = () => {
    const [loginStatus,SetLoginStatus]=useState("");
  const handleLogin=()=>{
    SetLoginStatus("login Successfull")
  }
  useEffect(()=>{
   getDatabse();
  },[])

  const getDatabse =async ()=>{
   try{
      const data =await firestore().collection('login').doc('CvpCNPpT3aMm3yE3Gijt').get();
      console.log(data);
   }
   catch(err){
    console.log(err);
   }
  }
  return (
   <SafeAreaView>
    <KeyboardAvoidingView>
    <Text style={styles.maintext} >Hello</Text>
    <Text style={styles.welcomeText}>Welcome!</Text>
   <TextInput 
   style={styles.input}
   placeholder='Enter Your EmailId'
   keyboardType='email-address'
   />
    <TextInput 
   style={styles.input}
   placeholder='Enter Your Password'
   keyboardType='visible-password'
   />
    <Pressable onPress={handleLogin}   >
    <Text style={styles.loginbutton} >Login</Text>
   </Pressable> 
   {loginStatus && <Text style={styles.loginstatus} >{loginStatus}</Text>}
   <Text style={styles.forgotpasstext}>Forgot password? </Text>
   <Text style={styles.signupinfo} >Do you have an Account? <Text style={styles.forgotpasstext} >Sign Up</Text></Text>
   </KeyboardAvoidingView>
   </SafeAreaView>

  )
}

export default Login

const styles=StyleSheet.create({
 maintext:{
    fontSize:30,
   textAlign:"center",
   marginTop:20,
   color:"#FF6347",
   fontWeight:"bold"
 },
 welcomeText:{
  fontSize:20,
  marginLeft:20,
  marginTop:40,
  color:"#FF6347",
  fontWeight:"bold"
 },
 input:{
  marginHorizontal:20,
  marginVertical:5,
  borderRadius:10,
  backgroundColor:"#DCDCDC"
 
 },
 loginbutton:{
    marginHorizontal:20,
    marginVertical:5,
    borderRadius:10,
    backgroundColor:"#FF6347",
    color:"#FFFFFF",
    textAlign:"center",
    fontSize:20,
    padding:10,
 },
 forgotpasstext:{
  textAlign:'center',
  marginVertical:30,
  color:"#FF6347",
  fontWeight:"bold"
 },
 signupinfo:{
    textAlign:"center"
 },
 loginstatus:{
    textAlign:"center",
    fontSize:20,
    color:"#008000"
 }

})