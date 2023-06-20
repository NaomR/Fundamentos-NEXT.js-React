export default function Repeticao1() {
   const ListaAprovados=[
    'Lulu',
    'Karma',
    'Zilean',
    'Thresh',
    'Rell'
   ]
   
    function RenderizarLista() {
        return ListaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    }
    
    return (
       <ul>
        {RenderizarLista()}
       </ul>
    )
}

// primeiro metodo

//const itens=[]

//for (let i = 0; i < ListaAprovados.length; i++) {
//   itens.push(<li key={i}>{ListaAprovados[i]}</li>)
    
//}
