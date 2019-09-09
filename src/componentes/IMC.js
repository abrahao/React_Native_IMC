import React from 'react'
import {TextInput, StyleSheet} from 'react-native'



const CalcIMC = props => {
    const alt = 1.60
    const peso = 57
    const IMC = peso / (alt * alt)
    return (
        <TextInput placeholder="Massa" keyboardType="numeric"></TextInput>,
        <TextInput placeholder="Peso" keyboardType="numeric"></TextInput>
    )
}

export default CalcIMC