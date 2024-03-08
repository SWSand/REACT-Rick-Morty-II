import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from "react-bootstrap";

function CharacterDetails(){
    const { id } = useParams()
    const [char, setChar] = useState([])

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

    return(
        <>
        <Container className="chars">
            <h1 className="bg-black text-white p-4 rounded">Details:  </h1>
            <Row>
            {char.map((character) => (
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
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container> 
        </>
    )
}

export default CharacterDetails;