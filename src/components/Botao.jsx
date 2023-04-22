
import styles from '../styles/Botao.module.css'
import { useState, useEffect } from 'react';

export default function Botao(props) {
  

  const [timerButon, setTimeButon] = useState();

  useEffect(() => {
    const timerButton = setTimeout(()=> {
      setTimeButon(1)
    }, 3000)
    return () => clearTimeout(timerButton);
  }, []);


  return (
    <div>
      <a className={styles.botao} style={{display: timerButon ? '' : 'none'}} href={props.rota} >{props.children} </a>
    </div>
  )
}