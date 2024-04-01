
import styles from "./FlagsBoard.module.css";

export default function FlagsBoard ({gameList}) {



    return (

        <div className={styles['flagsboard']} >
           { gameList.map( (country) =>  <div key={country.name} className={styles['flagsboard-img']} >
                                                <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                                            </div> )}
        </div>
    )
}