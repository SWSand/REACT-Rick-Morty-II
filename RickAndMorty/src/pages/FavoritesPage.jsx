import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const FavoritesPage =() => {

    const { favorites, setFavorites } = useOutletContext()


    return(
        <>
            <h1>My Favorite Characters: </h1>
            {favorites}
        </>
    )
}

export default FavoritesPage;