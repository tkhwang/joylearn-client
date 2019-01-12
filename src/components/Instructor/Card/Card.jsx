import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import { Card as SemanticCard, Icon, Image } from 'semantic-ui-react';

const InstructorCardInner = ({ instructor }) => {
  return (
    <ul>
      <li>
        Url : <a href={instructor.mainUrl}>{instructor.mainUrl}</a>
      </li>
      <li>
        Github: <a href={instructor.gitHub}>{instructor.gitHub}</a>
      </li>
    </ul>
  );
};

const Card = ({ instructor }) => (
  <React.Fragment>
    <PaperSheet
      title={instructor.fullName ? instructor.fullName : instructor.name}
    >
      <InstructorCardInner instructor={instructor} />
    </PaperSheet>
    {/* <SemanticCard>
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
    </SemanticCard> */}
  </React.Fragment>
);

export default Card;
