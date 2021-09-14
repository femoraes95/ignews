import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";

export function SigInButton(){

    const isUserLoggedIn = false;

    return isUserLoggedIn ? (

        <button 
            type="button"
            className={styles.signInButton}
        >  
            <FaGithub color="#04d361"/> 
            Felipe Moraes
        </button>

    ) : (
        <button 
            type="button"
            className={styles.signInButton}
        >  
            <FaGithub color="#eba417"/> 
            Sign in with Github
        </button>
    )
}