import If from "../../../components/If";
import SomentePar from "../../../components/SomentePar";

export default function condicional1() {
    const numero = 5
    return (
        <div>
           <If teste={numero % 2 === 0}>
                <h2>o numero {numero} é par</h2>
           </If>
           <If teste={numero % 2 === 1}>
                <h2>o numero {numero} é Impar</h2>
           </If>
        </div>
    )
}