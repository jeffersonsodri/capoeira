import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/logo.png';
import paradaDeMao from '../../public/images/paradaDeMao.png';
import Botao from '../components/Botao';
import SalesButton from "../components/SalesButton";
import Wave from '../components/Wave';
import styles from '../styles/Home.module.css';
import SobreEu from '../components/SobreEu';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={logo} width={150} height={150}></Image>
          <span className={styles.headline}>Aprenda capoeira sem sair de casa</span>
          <span className={styles.subtitle}>Tudo o que você precisa para entrar em uma roda de capoerira e se destacar</span>
        </div>
        <div >Aprenda o passo a passo ensinado pelos grandes mestres da capoeira Brasileira</div>
        <p></p>
        <Image src={paradaDeMao} className={styles.paradaDeMao}></Image>
        <Botao rota={'/obrigado'} >Quero Aprender Capoeira</Botao><p></p>
      </div>
      <Wave></Wave>
      <SobreEu/>
    </div>
  )
}