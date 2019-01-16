import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet';

const LectureCardInner = ({ instructor, lecture }) => {
  console.log('in Card instructor : ', instructor);
  console.log('in Card lecture : ', lecture);
  return (
    <ul>
      <li>
        Url : <a href={lecture.url}>{lecture.url}</a>
      </li>
      <li>Language : {lecture.lang === 'eng' ? 'English' : 'Korean'}</li>
      <li>Free / Paid : {!lecture.free ? 'Paid' : 'Free'}</li>
      <li>
        Instructor :
        <a>{instructor.fullName ? instructor.fullName : instructor.name}</a>
      </li>
      <ul>
        <li>
          Url : <a href={instructor.mainUrl}>{instructor.mainUrl}</a>
        </li>
        <li>
          GitHub : <a href={instructor.gitHub}>{instructor.gitHub}</a>
        </li>
      </ul>
    </ul>
  );
};

const Card = ({ instructor, lecture }) => (
  <React.Fragment>
    <PaperSheet title={lecture.name}>
      <LectureCardInner lecture={lecture} instructor={instructor} />
    </PaperSheet>
  </React.Fragment>
);

export default Card;
