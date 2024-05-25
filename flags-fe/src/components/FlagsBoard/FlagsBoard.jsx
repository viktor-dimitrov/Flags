

import styles from "./FlagsBoard.module.css";

export default function FlagsBoard ({list, region, count, className}) {

const flagSize = Math.sqrt(count) * 30 + Math.sqrt(count);

    return (

        <div className={`${styles['flagsboard']} ${styles[className]}`  } style={{ width: `${flagSize}px`, height: `${flagSize}px` }}  >
           { list.map( (country) =>  <div key={country.name} className={styles['img-container'] } >
                                             <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />  
                                            </div> )}
        </div>
    )
}

