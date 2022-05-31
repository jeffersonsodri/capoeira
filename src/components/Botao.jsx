
import styles from '../styles/Botao.module.css'
import animation from '../styles/Animation.module.css'
export default function Botao(props) {
  

  return (
    <div>
      <a className={styles.botao}  href={props.rota} >{props.children} </a>
    </div>
  )
}