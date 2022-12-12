import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image ,ListItem, Button, Input, Avatar, Card, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView } from "react-native";
import axios from "axios";


export default function ListaDeProdutoScreen({ navigation, route }) {
  const [list, setlist] = useState([]);

  useEffect(() => {
    function consultarDados() {
      axios
        .get("http://192.168.2.124:5000/produtos")

        .then(function (response) {
          setlist(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  }, []);

  return (
    <View>
      {/* <Button
        title={"Criar Produto"}
        onPress={() => navigation.navigate("CriarContato")}
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 289, 1)",
          alignItems: "center",
        }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 100,
          marginVertical: 10,
        }}
      /> */}
      
      <Header
            centerComponent={{text: 'Listar Produtos', style: {color: '#fff', fontSize: 20}}}
            rightComponent={<Button
                title="+"
                onPress={() => navigation.navigate('CadastroDeProduto')}
             />}
        />

      <ScrollView>
        <Card containerStyle={{ padding: 0 }}>
          {list.map((linha, indice) => (
            <ListItem
              key={indice}
              bottomDivider
              onPress={() =>
                navigation.navigate("AlterarDados", {
                  nomeproduto: linha.nomeproduto,
                  armazenamento: linha.armazenamento,
                  valor: linha.valor,
                  id: linha.id,
                })
              }
            >
              <ListItem.Content>
                <Image
                  source={require('../assets/iphone.png')}
                  style={{ width: 330
                    , height: 200, borderWidth: 1, borderColor: "black"}}
                />
                <ListItem.Title style={{ fontSize: 18 }}>
                  Produto: {linha.nomeproduto}
                </ListItem.Title>
                <ListItem.Title style={{ fontSize: 18 }}>
                  Armazenamento: {linha.armazenamento}
                </ListItem.Title>
                <ListItem.Title style={{ fontSize: 18 }}>
                  Valor: R$ {linha.valor},00
                </ListItem.Title>
                <Card.Divider />
              </ListItem.Content>
            </ListItem>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}
