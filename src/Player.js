import React from "react";
import { Card, Button } from "react-bootstrap";

const Player = ({ name, team, nationality, shirtNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team}<br />
          <strong>Nationalité:</strong> {nationality}<br />
          <strong>Numéro de maillot:</strong> {shirtNumber}<br />
          <strong>Âge:</strong> {age}
        </Card.Text>
        <Button variant="primary">Voir Profil</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
