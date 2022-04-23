import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handelInput = () => {
    console.log(email + password+ phone+ name);
  };


  return (
    <ScrollView>

      <View style={styles.container}>
        <Image style={styles.image} source={require("../../images/logo.jpg")} />


        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name."
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c" 
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="phone."
            placeholderTextColor="#003f5c" 
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>



        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handelInput()}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>

      </ScrollView >
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },

      image: {
        marginBottom: 40,
      width: 200,
      height: 200,
  },

      inputView: {
        backgroundColor: "#4DFA9E",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,

      alignItems: "center",
  },

      TextInput: {
        height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },

      forgot_button: {
        height: 30,
      marginBottom: 30,
  },

      loginBtn: {
        width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#3BB2E3",
  },
});
