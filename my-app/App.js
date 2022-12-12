import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import FlashMessage from "react-native-flash-message";
import LoginScreen from './screens/Login';
import CadastroDeUsuarioScreen from './screens/CadastroDeUsuario';
import ListaDeProdutoScreen from './screens/ListaDeProdutos';
import CadastroDeProdutoScreen from './screens/CadastroDeProduto';
import AlteracaoEExclusaoDeProdutosScreen from './screens/AlteracaoEExclusaoDeProdutos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroDeUsuario" component={CadastroDeUsuarioScreen} />
        <Stack.Screen name="ListaDeProduto" component={ListaDeProdutoScreen} options={{headerShown:false}} />
        <Stack.Screen name="CadastroDeProduto" component={CadastroDeProdutoScreen} />
        <Stack.Screen name="AlteracaoEExclusaoDeProdutos" component={AlteracaoEExclusaoDeProdutosScreen} />
      </Stack.Navigator>
      <FlashMessage position="center" />
    </NavigationContainer>
  );
}

export default App;