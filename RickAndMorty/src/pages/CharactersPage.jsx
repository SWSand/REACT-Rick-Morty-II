import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./CharactersCSS.css";
import { useNavigate } from 'react-router-dom';

function CharactersPage() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  
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

    return (
        <>
          <Container className="chars">
            <h1 className="bg-black text-white p-4 rounded">Meet the Characters</h1>
            <Row>
                {characters.map((character) => (
                    <Col key={character.id} md={3} >
                        <Card>
                            <Card.Img className="p-2 " variant="top" src={character.image} />
                            <Card.Body className="bg-black text-white m-2 rounded">
                                <Card.Title className="bg-white text-black p-1 rounded">{character.name}</Card.Title>
                                <Card.Text>Status: {character.status}</Card.Text>
                                <Card.Text>Species: {character.species}</Card.Text>
                                <Card.Text>Origin: {character.origin.name}</Card.Text>
                                <Card.Text>Location: {character.location.name}</Card.Text>
                            </Card.Body>
                            <Button variant="dark" onClick={()=>{navigate(`/character/${character.id}`)}}>Details</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
}

export default CharactersPage;