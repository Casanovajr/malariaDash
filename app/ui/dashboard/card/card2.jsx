import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card2 = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total de usuario</span>
                <span className={styles.number}>Em construção...</span>
                <span className={styles.detail}>
                <span><span className={styles.positive}>Em</span> construção...</span>
                </span>
            </div>
        </div>
    )
}


export default Card2

