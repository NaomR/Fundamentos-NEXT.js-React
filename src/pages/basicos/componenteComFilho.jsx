import Item from "../../../components/Item";
import Lista from "../../../components/Lista";

export default function ComponenteComFilhos() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item #0001"/>
                <Item conteudo="Item #0002"/>
                <Item conteudo="Item #0003"/>
                <Item conteudo="Item #0004"/>
            </Lista>
        </div>
    )
}