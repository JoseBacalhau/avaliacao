import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem,Button, Input, Avatar} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function CadastroDeUsuarioScreen({ navigation, route }) {
  
  const [getnome, setnome] = useState();
  const [getemail, setemail] = useState();
  const [getsenha, setsenha] = useState();

  async function inserirDados() {
    await axios
      .post("http://192.168.2.124:5000/cadastro", {
        nome: getnome,
        email: getemail,
        senha: getsenha
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nome</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setnome(Text)}
        value={getnome}
      ></TextInput>
      <Text>Email</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setemail(Text)}
        value={getemail}
      ></TextInput>
      <Text>Senha</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setsenha(Text)}
        value={getsenha}
      ></TextInput>
      <Button
        title={"Salvar"}
        onPress={() => { inserirDados(),
          navigation.navigate("Login"),
            showMessage({
              message: "Criação de Usuário",
              description: "Usuário criado com Sucesso",
              type: "success",
            });
        }}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      {/* <Button
        title={"Voltar"}
        onPress={() => navigation.navigate("Login")}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      /> */}
    </View>
  );
}
