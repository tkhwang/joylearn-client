import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const TestCard = ({ name, image, github, url }) => (
  <React.Fragment>
    <h1>Instructor : {name}</h1>
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{github}</span>
        </Card.Meta>
        <Card.Description>
          {name} is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {url}
        </a>
      </Card.Content>
    </Card>
  </React.Fragment>
);

export default TestCard;
