import Filho from "./filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Roberta" nomeFilhos="Natan,Rafael,Davi,Naom" familia=" familia  Silva"/>
            <br />
            <Filho nome="Marcia" nomeFilhos="Gabriel" familia="Familia Silva" />
            <br />
            <Filho nomeFilhos="joão" familia={props.familia}/>
            <br />
            <Filho  {...props} nome="Irineu" />
        </div>
    )
}