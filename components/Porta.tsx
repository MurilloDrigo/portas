import PortaModel from "@/model/porta"
import styles from "../styles/Porta.module.css"
import Presente from "./Presente"

interface PortaProps{
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta(props: PortaProps){
    const porta  = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alterarSelecao = e => props.onChange(porta.alterarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
        }
    function renderizarPorta(){
        return(
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>
        )
    }
    
    return(
        <div className={styles.area} onClick={alterarSelecao}>
       
        <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ?
         renderizarPorta():
         porta.temPresente ? <Presente></Presente> : false }
            </div>
        <div className={styles.chao}></div>

    </div>

    )
}