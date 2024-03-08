import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./CharactersCSS.css";
import { useNavigate, useOutletContext } from 'react-router-dom';

function CharactersPage() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  const {favorites, setFavorites} = useOutletContext()

  useEffect(()=> {
      const getCharacters = async () => {
        try{
          const response = await axios.get('https://rickandmortyapi.com/api/character/')
          console.log(response.data.results)
          setCharacters(response.data.results)
        }catch(error){
          console.error('Could not find characters', error)
        }
      };
    getCharacters();
  },[])

  const handleRemoveFavorite = (id) =>{
        
    let updatedFavorites = favorites.filter(char => char.id !== id);
    setFavorites(updatedFavorites)
}


  const checkFavorites = (id) =>{
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === id) {
            return false;
        } 
      }
      return true;
    }    

  
    return (
        <>
          <Container className="chars">
            <h1 className="bg-black text-white p-4 rounded">Meet the Characters</h1>
            <Row>
                {characters.map((character) => (
                    <Col key={character.id} xs={5} sm={6} md={4} lg={3} xl={3} >
                        <Card className="p-2 m-2">
                            <Card.Img className="p-2" variant="top" src={character.image} />
                            <Card.Body className="bg-black text-white m-2 rounded">    
                                <Card.Title className="bg-white text-black p-1 rounded">{character.name}</Card.Title>
                                <Button variant="outline-light"  onClick={()=>{navigate(`/character/${character.id}`)}}>View More Details...</Button>                            
                            </Card.Body>
                            <Button className="m-1" variant={!checkFavorites(character.id) ? 'secondary': 'warning'} disabled={!checkFavorites(character.id)}  onClick={()=> {
                                if (checkFavorites(character.id) && favorites.length<4){
                                    setFavorites([...favorites, character])
                                  } 
                                }}>{checkFavorites(character.id) ? 'Add to Favorites' : 'Favorite' }</Button>
                            <Button className="m-1" variant={checkFavorites(character.id) ? 'light': 'danger'} disabled={checkFavorites(character.id) }  onClick={()=> {handleRemoveFavorite(character.id)}}>{checkFavorites(character.id) ? '' : 'Remove From Favorites' }</Button>                
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
}

export default CharactersPage;