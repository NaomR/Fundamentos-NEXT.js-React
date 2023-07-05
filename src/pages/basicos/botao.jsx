function acao1() {
    console.log("botão clickado")
}

export default function botao() {

    function acao2() {
        console.log("Botão acionado #")
    }

    return (
        <div>
            <button onClick={acao1}>Clique aqui</button>
            <br />
            <button onClick={acao2}>Clique Agora</button>
            <br />
            <button onClick={() => console.log("Clicadoo")}>Button</button>
        </div>
    )
}