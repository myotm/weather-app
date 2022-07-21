import React from 'react'
import Card from 'react-bootstrap/Card';

type Props = {
    icon: string;
    description: string;
    temperature: string;
    location: string;
};

const WeatherCard = ({icon, description, temperature, location}: Props) => {

    const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={iconURL} />
        <Card.Body>
            <Card.Title>{location}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>
                {temperature}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default WeatherCard;