import erro404 from "./erro404.png";
import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function PageNotFound(){
    return(
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado</h2>
            <img src={erro404} alt="imagem de page not found"/>
        </section>
        <Footer/>
        </>
    );
}
export default PageNotFound;