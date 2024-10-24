import { useContext, useState, createContext } from "react";


export const FavoritesContext = createContext()
FavoritesContext.displayName = "Myfavorite";

export default function FavoritesProvider({children}){
    const [favorite, setFavorite] = useState([])

    return(
        <FavoritesContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}

//hook personalizado
export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext);

    function addFavorite(newFavorite){
        //Verificar sem tem item favorito repetido
        const repeatedFavorite = favorite.some(item => item.id === newFavorite.id)

        //nova lista recebe lista anterior
        let newList = [...favorite]

        //verificar se nao tem repetido e adicionar o item na lista de favoritos
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)  
        }
        
        // se for repetido ele vai ser tirado da lista
        newList = favorite.filter(fav => fav.id === newFavorite.id);
        return setFavorite(newList)
    }
    return {
        favorite,
        addFavorite
    }
}