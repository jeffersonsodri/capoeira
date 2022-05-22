import styles from '../styles/Home.module.css'
import Botao from '../components/Botao'


export default function Home() {
  
  return(
    <div className={styles.container}>
      <h1>Jefferson é o melhor</h1>
      <Botao  rota={'/obrigado'} >Página de Obrigado</Botao>
    </div>
  )
}