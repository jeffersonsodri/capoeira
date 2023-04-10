import Image from 'next/image'
import logo from '../../public/images/logo.png'
import paradaDeMao from '../../public/images/paradaDeMao.png'
import Botao from '../components/Botao'
import Wave from '../components/Wave'
import styles from '../styles/Home.module.css'
import SalesButton from "../components/SalesButton";

export default function Home() {
  
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={logo}  width={150} height={150}></Image>
          <h1 className={styles.headline}>Aprenda capoeira em 30 dias sem sair de casa e sozinho</h1>
        </div>
        <div >Aprenda o passo a passo ensinado pelos grandes mestres da capoeira Brasileira</div>
        <p></p>
        <Image src={paradaDeMao} className={styles.paradaDeMao}></Image>
        <SalesButton  text="Comprar Agora"/>
        <Botao  rota={'/obrigado'} >Quero Aprender Capoeira</Botao><p></p>
      </div>
        <Wave></Wave>
    </div>
  )
}