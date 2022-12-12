import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem, Button, Input, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function CadastroDeProdutoScreen({ navigation, route }) {
  const [getnomeproduto, setnomeptoduto] = useState();
  const [getarmazenamento, setarmazenamento] = useState();
  const [getvalor, setvalor] = useState();

  async function inserirDados() {
    await axios
      .post("http://192.168.2.124:5000/cadastroproduto", {
        nomeproduto: getnomeproduto,
        armazenamento: getarmazenamento,
        valor: getvalor,
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
      <Text>Nome do Produto</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setnomeptoduto(Text)}
        value={getnomeproduto}
      ></TextInput>
      <Text>Tamanho do Armazenamento</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setarmazenamento(Text)}
        value={getarmazenamento}
      ></TextInput>
      <Text>Valor do Produto</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setvalor(Text)}
        value={getvalor}
      ></TextInput>
      <Button
        title={"Salvar"}
        onPress={() => {
          navigation.navigate("ListaDeProduto"),
            showMessage({
              message: "Criação de Produto",
              description: "Produto criado com Sucesso",
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
