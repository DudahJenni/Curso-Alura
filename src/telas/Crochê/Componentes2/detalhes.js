import React from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
            <View style={estilos.MeusCroches}>
                 <Image source={ LogoFazenda } style={estilos.imagemMeusCroches} />
                 <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={estilos.descricao}>{ descricao }</Texto>
            <Texto style={estilos.preco}>{ preco }</Texto>

            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textoBotao}>{ botao }</Texto>
            </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create ({
nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
},
MeusCroches: {
    flexDirection: "row", 
    paddingVertical: 12,
},
imagemMeusCroches: {
    width: 32,
    height: 32,
},
nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
},
descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
preco: {
    color: "#c01e1eff",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
},
botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
},
textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
}
})