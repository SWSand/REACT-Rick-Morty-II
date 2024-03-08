import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useOutletContext, useNavigate } from "react-router-dom";

const FavoritesPage =() => {

    const { favorites, setFavorites } = useOutletContext()
    const navigate = useNavigate()

    const handleRemoveFavorite = (id) =>{
        
        let updatedFavorites = favorites.filter(char => char.id !== id);
        setFavorites(updatedFavorites)
    }

    return(

        <>
            <Container className="chars">
            <h1 className="bg-black text-white p-4 rounded">Favorites</h1>
            <Row>
                {favorites.map((character) => (
                    <Col key={character.id} xs={5} sm={6} md={4} lg={3} xl={3} >
                        <Card className="p-2 m-2">
                            <Card.Img className="p-2" variant="top" src={character.image} />
                            <Card.Body className="bg-black text-white m-2 rounded">    
                                <Card.Title className="bg-white text-black p-1 rounded">{character.name}</Card.Title>
                                <Button variant="outline-light"  onClick={()=>{navigate(`/character/${character.id}`)}}>More Details...</Button>                            
                            </Card.Body>
                            <Button variant="danger"  onClick={()=> {handleRemoveFavorite(character.id)}}>Remove</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </>
    )
}

export default FavoritesPage;