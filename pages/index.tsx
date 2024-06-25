import Porta from "../components/Porta"
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../functions/portas";
import Cartao from "@/components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";

export default function Formulario() {  
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(2)
  // const[portas, setPortas] = useState(criarPortas(5, 4))

  // function renderizarPortas() {
  //   return portas.map(porta => {
  //     return <Porta key={porta.numero} value={porta}
  //      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  //   })
  // 
return(
  <div className={styles.formulario}>
    <div>
    <Cartao bgcolor="#C0392C"> <h1>Monty Hall</h1>      </Cartao>
    <Cartao> 
      <EntradaNumerica text="Quantidade Portas:" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>  
    </Cartao>
    
    </div>
    <div>
    <Cartao> 
      <EntradaNumerica text="Porta com Presente:" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>  
    </Cartao>
    <Cartao bgcolor="green">    
      <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}> Iniciar
      </Link>
    </Cartao>

    </div>
  </div>
)  
} 