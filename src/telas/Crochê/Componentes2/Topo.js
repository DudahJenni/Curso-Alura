import React from 'react';
import { Image, StyleSheet, Dimensions } from  'react-native';

import Texto from '../../../componentes/Texto';
import Mesa from '../../../../assets/Mesa.png';

const width = Dimensions.get ('screen').width;

export default function Topo({ titulo }) {
    return <>
        <Image source={Mesa} style={estilos.Mesa} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const estilos = StyleSheet.create ({
     topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#00d207ff",
        fontWeight: "bold",
        padding: 16
    },
})