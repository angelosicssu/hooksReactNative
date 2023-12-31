import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrelas from "../../../components/Estrelas";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, setSelecionado] = useState(false);
    
    return <TouchableOpacity 
            style={estilos.cartao}
            onPress={() => setSelecionado(!selecionado)}
        >
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{ nome }</Text>
                <Estrelas 
                editavel={selecionado}
                grande={selecionado}
                quantidade={estrelas}/>
            </View>
            <Text>{distancia}</Text>
        </View>
        
    </TouchableOpacity> 

}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4
    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})