import React from 'react';
import CommonRadioButton from '../RadioButton/RadioButton.jsx';
import CommonRadioStrap from '../RadioButton/RadioStrap.jsx';
import CommonPaperSheet from '../../common/PaperSheet/PaperSheet.jsx';

const ReviewForm = ({ type, name, user }) => {
  const msg = `Share your review on ${name}`;
  return (
    <React.Fragment>
      <CommonPaperSheet title={msg}>
        <CommonRadioButton />
        <CommonRadioStrap type={type} name={name} user={user} />
      </CommonPaperSheet>
    </React.Fragment>
  );
};

export default ReviewForm;
