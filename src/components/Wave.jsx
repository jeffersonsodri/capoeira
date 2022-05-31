import styles from '../styles/Wave.module.css'

export default function Wave() {


  return(
    <>
      <div className={styles.bodyWaves}>
        <svg className={styles.waves} xmlns='http://www.w3.org/2000svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 24 140 25' preserveAspectRatio='none' shapeRendering='auto'>
          <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
          </defs>
            <g className={styles.parallax}>
              <use  xlinkHref='#gentle-wave' x='10' y='0' fill='rgba(107, 107, 107)'  /> 
              <use  xlinkHref='#gentle-wave' x='10' y='3' fill='rgb(172, 160, 0)'  /> 
              <use  xlinkHref='#gentle-wave' x='10' y='6' fill='rgba(255, 0, 0)'  /> 
              <use  xlinkHref='#gentle-wave' x='10' y='10' fill='rgba(255,255,255)'  /> 
            </g>
        </svg>
      </div>
    </>
  )
}

