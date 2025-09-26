import MeusCroches from '../../assets/MeusCroches.png'

import Banheiro from '../../assets/Modelos/Banheiro.png'
import Enxoval from '../../assets/Modelos/Enxoval.png'
import Mesa2 from '../../assets/Modelos/Mesa2o.png'
import Tenis from '../../assets/Modelos/Tenis.png'
import Pano from '../../assets/Modelos/Pano.png'

const cesta = {
    topo: {
        titulo: "Detalhes do Crochê"
    },
    detalhes: {
        nome: "Tipos de Crochê",
        logoFazenda: MeusCroches,
        nomeFazenda: "Andressa Crochês",
        descricao: "Um site com as mostras de produtos de crochês selecionados, com grandes cuidados ao produzi-la",
        preco: "R$50,00-250,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Modelos de Crochê",
        lista: [
            {
                nome: "Banheiro",
                imagem: Banheiro,
            },
              {
                nome: "Enxoval",
                imagem: Enxoval,
            },
              {
                nome: "Mesa2",
                imagem: Mesa2,
            },
              {
                nome: "Tenis",
                imagem: Tenis,
            },
              {
                nome: "Pano",
                imagem: Pano,
            }
        ]
    }
}

export default cesta;