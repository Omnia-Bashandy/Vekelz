import React from 'react';
import { Card } from 'react-bootstrap';

function MyCard(props) {
  const {product} = props;
  const cardStyle = {
    width: product.width,
    height: product.height,
    overflow: 'auto',
  };

  return (
    <Card style={cardStyle} key={product.id}>
      <Card.Body>
      <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.type}</Card.Subtitle>
        
          <Card.Img src={product.image} alt="car"/>
      </Card.Body>
      <Card.Text href="#">
        {/* {footer} */}
      </Card.Text>
    </Card>
  );
}

export default MyCard;


