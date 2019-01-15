import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet.jsx';

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
  </React.Fragment>
);

export default Card;
