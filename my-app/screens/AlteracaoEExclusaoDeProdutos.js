import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem, Button, Input, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";


export default function AlteracaoEExclusaoDeProdutosScreen({ navigation, route }) {
  const [getnomeproduto, setnomeproduto] = useState();
  const [getarmazenamento, setarmazenamento] = useState();
  const [getvalor, setvalor] = useState();
  const [getid, setid] = useState();

    useEffect(() => {
      if (route.params) {
        const {nomeproduto} = route.params ;
        const {armazenamento} = route.params ;
        const {valor} = route.params ;
        const {id} = route.params ;

        setnomeproduto(nomeproduto);
        setarmazenamento(armazenamento);
        setvalor(valor);
        setid(id);
      }
    }, []);
    
    function alterarDados() {
    axios
      .put("http://192.168.2.124:5000/produto/"+getid, {
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

    function ExcluirDados() {
      axios
        .delete("http://192.168.2.124:5000/produto/"+getid, {
          id: getid
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
      <Text>Nome Do Produto</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setnomeproduto(Text)}
        value={getnomeproduto}
      ></TextInput>
      <Text>Armazenamento</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setarmazenamento(Text)}
        value={getarmazenamento}
      ></TextInput>
      <Text>Valor</Text>
      <TextInput
        style={{ height: 40, width: 350, borderColor: "black", borderWidth: 1 }}
        onChangeText={(Text) => setvalor(Text)}
        value={getvalor}
      ></TextInput>
      <Button
        title={"Alterar"}
        onPress={() => {alterarDados(), navigation.navigate("ListaDeProduto"),
        showMessage({
          message: "Alteração de Produto",
          description: "Produto alterado com Sucesso",
          type: "success",
        });}}
        buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title={"Excluir"}
        onPress={() => {ExcluirDados(),  navigation.navigate("ListaDeProduto"),
        showMessage({
          message: "Exclusão de Produto",
          description: "Produto excluido com Sucesso",
          type: "success",
        });}}
        buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}
