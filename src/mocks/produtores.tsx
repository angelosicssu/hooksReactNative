import green from '../assets/produtores/green.png'
import grow from '../assets/produtores/grow.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import salad from '../assets/produtores/salad.png'

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1) + min )
}

const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: 'Green',
            imagem: green,
            distancia: `${gerarAleatorio(1, 500)}m`,
            estrelas: gerarAleatorio(1, 5),
        },
        {
            nome: 'Grow',
            imagem: grow,
            distancia: `${gerarAleatorio(1, 500)}m`,
            estrelas: gerarAleatorio(1, 5),
        },
        {
            nome: 'Jenny and Jack',
            imagem: jennyJack,
            distancia: `${gerarAleatorio(1, 500)}m`,
            estrelas: gerarAleatorio(1, 5),
        },
        {
            nome: 'Potager',
            imagem: potager,
            distancia: `${gerarAleatorio(1, 500)}m`,
            estrelas: gerarAleatorio(1, 5),
        },
        {
            nome: 'Salad',
            imagem: salad,
            distancia: `${gerarAleatorio(1, 500)}m`,
            estrelas: gerarAleatorio(1, 5),
        }
    ]
}

export default produtores;