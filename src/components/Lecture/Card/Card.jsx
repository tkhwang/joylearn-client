import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet';

const LectureCardInner = ({ instructor, lecture }) => {
  if (instructor) {
    console.log('욘석들 i', instructor);
  }
  console.log('욘석들 l', lecture);
  return (
    <div />
    // <ul>
    //   <li>
    //     Url : <a href={lecture.url}>{lecture.url}</a>
    //   </li>
    //   <li>
    //     Instructor: <a>{instructor.name}</a>
    //   </li>
    //   <ul>
    //     <li>
    //       Url : <a href={instructor.mainUrl}>{instructor.mainUrl}</a>
    //     </li>
    //     <li>
    //       GitHub: <a href={instructor.gitHub}>{instructor.gitHub}</a>
    //     </li>
    //   </ul>
    // </ul>
  );
};

const Card = ({ lecture }) => (
  <React.Fragment>
    <PaperSheet title={lecture.name}>
      <LectureCardInner lecture={lecture} />
    </PaperSheet>
  </React.Fragment>
);

export default Card;
