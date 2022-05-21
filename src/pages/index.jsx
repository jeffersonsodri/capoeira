import style from '../styles/Home.module.css'



export default function Home() {
  
  return(
    <div>
      <h1>Jefferson é o melhor</h1>
      <a  className={style.botao} href={'/obrigado'} >Clique aqui</a>
    </div>
  )
}