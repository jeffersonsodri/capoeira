import styles from '../styles/Home.module.css'
import Botao from '../components/Botao'
import Image from 'next/image'
import animation from '../styles/Animation.module.css'
import paradaDeMao from '../../public/images/paradaDeMao.png'
import logo from '../../public/images/logo.png'
import Wave from '../components/Wave'

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
        <Botao  rota={'/obrigado'} >Quero Aprender Capoeira</Botao><p></p>
      </div>
        <Wave></Wave>
    </div>
  )
}