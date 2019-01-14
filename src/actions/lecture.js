export const LECTURE_SET_ALL = 'lecture/LECTURE_SET_ALL';
export const LECTURE_ADD_COMMENTS = 'lecture/LECTURE_ADD_COMMENTS';

export const set_all = lecture => {
  return {
    type: LECTURE_SET_ALL,
    payload: {
      lecture: lecture
    }
  };
};

export const add_comments = comments => {
  return {
    type: LECTURE_ADD_COMMENTS,
    payload: { comments: comments }
  };
};
