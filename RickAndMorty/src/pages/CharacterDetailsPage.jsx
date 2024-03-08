import { useParams, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function CharacterDetails(){
    const { id } = useParams()
    const [char, setChar] = useState([])
    const { favorites, setFavorites } = useOutletContext()

    useEffect(()=> {
        const getCharacter = async () => {
            try{
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                console.log(response.data)
                setChar([...char,response.data])
                
            }catch(error){
                console.error('Could not find character', error)
            }
        };
        getCharacter();
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

    return(
        <>
        <Container className="chars">
            <h1 className="bg-black text-white p-4 rounded">Details:  </h1>
            <Row>
            {char.map((character) => (
                    <Col key={character.id} md={5} >
                        <Card>
                            <Card.Img className="p-2 " variant="top" src={character.image} />
                            <Card.Body className="bg-black text-white m-2 rounded">
                                <Card.Title className="bg-white text-black p-1 rounded">{character.name}</Card.Title>
                                <Card.Text>Status: {character.status}</Card.Text>
                                <Card.Text>Gender: {character.gender} </Card.Text>
                                <Card.Text>Species: {character.species}</Card.Text>
                                <Card.Text>Origin: {character.origin.name}</Card.Text>
                                <Card.Text>Location: {character.location.name}</Card.Text>
                                <Card.Text>Type: {character.type} </Card.Text>
                            </Card.Body>
                            <Button className="m-1" variant={!checkFavorites(character.id) ? 'secondary': 'warning'} disabled={!checkFavorites(character.id)}  onClick={()=> {
                                if (checkFavorites(character.id) && favorites.length<4){
                                    setFavorites([...favorites, character])
                                  } 
                                }}>{checkFavorites(character.id) ? 'Add to Favorites' : 'Favorite' }</Button>
                            <Button className="m-1" variant={checkFavorites(character.id) ? 'light': 'danger'} disabled={checkFavorites(character.id)}  onClick={()=> {handleRemoveFavorite(character.id)}}>{checkFavorites(character.id) ? '' : 'Remove From Favorites' }</Button>         

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container> 
        </>
    )
}

export default CharacterDetails;