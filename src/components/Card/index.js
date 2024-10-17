import styles from "./Card.module.css";

function Card({id}){
    return(
        <section className={styles.card}>
            <a href={`https://www.youtube.com/watch?v=${id}`} rel="noreferrer noopener" target="_blank">
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-A4N6FhIGSrPmaHTKFJR1BuopZw`} alt="Capa"/>
            </a>
        </section>
    );

}
export default Card;

/*
https://i.ytimg.com/an_webp/B_nq7VTJZds/mqdefault_6s.webp?du=3000&sqp=CLTburgG&rs=AOn4CLA3e3jitMbz_RRA_jv62dkQX2rN6Q
B_nq7VTJZds
*/ 