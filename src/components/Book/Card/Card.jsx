import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import { Card as SemanticCard, Icon, Image } from 'semantic-ui-react';

const BookCardInner = ({ book }) => {
  return (
    <ul>
      <li>
        Url : <a href={book.mainUrl}>{book.mainUrl}</a>
      </li>
      <li>
        Github: <a href={book.gitHub}>{book.gitHub}</a>
      </li>
    </ul>
  );
};

const Card = ({ book }) => (
  <React.Fragment>
    <PaperSheet title={book.fullName ? book.fullName : book.name}>
      <BookCardInner book={book} />
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
