import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const TestCard = ({ name, url }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{url}</span>
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
);

export default TestCard;
