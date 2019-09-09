import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

type Props = {}
export default class App extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {altura:0, peso:0, resultado:0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    this.setState(s)
  }

  render(){
    return(
    <View style={styles.container}>
    <View style={styles.entradas}>
      <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso)=>{this.setState({peso})}}/>
      <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
    </View>
    <TouchableOpacity style={styles.button} onPress={this.calculaIMC}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
    <Text style={styles.buttonText}>{this.state.resultado.toFixed(2)}</Text>
  </View>
    )}
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ccffcc'
  },
  entradas: {
    flexDirection: 'row',
  },
  input:{
    height: 80,
    width: '50%',
    textAlign: 'center',
    fontSize: 50,
    marginTop: 24
  },
  button:{
    height: 60,
    backgroundColor: '#B0E0E6'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  }
})