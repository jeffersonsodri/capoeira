import styles from '../styles/Home.module.css'
import Botao from '../components/Botao'
import Image from 'next/image'
import paradaDeMao from '../../public/paradaDeMao.png'
import Wave from '../components/Wave'

export default function Home() {
  
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <Botao  rota={'/obrigado'} >Página de Obrigado</Botao><p></p>
        <Image src={paradaDeMao} className={styles.paradaDeMao}></Image>
      </div>
        <Wave></Wave>
    </div>
  )
}