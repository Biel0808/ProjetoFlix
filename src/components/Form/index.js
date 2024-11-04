import styles from "./Form.module.css"
import {categories} from "../Category"
import { useState } from "react";
function Form(){
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [ videos, setVideos] = useState([]);
    const [ errors, setErrors] = useState('');
    
    function valideUrl(url){
        //validar url
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

        if(!regex.test(url) || url.length < 43){
            setErrors('ERRO: URL inválida')
            return false
        }else{
            return url.substring(32,43);
        }
    }

    function onSave(e){
        e.preventDefault() // previne comportamento padrão do form
         //validar category
        if(!category || category === "-"){
            setErrors('ERRO: Escolha uma categoria')
            return
        }else{
            setErrors('')
        }       
        //validar url
        const urlVideo = valideUrl(url);
        if(urlVideo && category){
            //salvarr dados
            const newVideo = {url,category}
            setVideos([...videos,newVideo]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
           //limpar form
            setUrl('')
            setCategory('')
        }else{
            setErrors('ERRO: URL inválida')
        }
       
        
    }
    return(
        <section className={styles.container}>
            <h2>Cadastro de videos </h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Video</label>
                    <input
                        type="txt"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(el => 
                            <option key={el} value={el}>{el}</option>
                        )}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    <p>{errors}</p>
                </div>
            </form>
        </section>
    );
}

export default Form;