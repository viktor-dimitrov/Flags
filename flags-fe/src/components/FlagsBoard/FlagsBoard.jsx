
import styles from "./FlagsBoard.module.css";

export default function FlagsBoard ({list}) {



    return (

        <div className={styles['flagsboard']} >
           { list.map( (country) =>  <div key={country.name} className={styles['img-container']} >
                                             <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />  
                                            </div> )}
        </div>
    )
}