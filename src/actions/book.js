export const BOOK_SET_ALL = 'book/BOOK_SET_ALL';
export const BOOK_UPDATE_BOOK = 'book/BOOK_UPDATE_BOOK';
export const BOOK_UPDATE_INSTRUCTOR = 'book/BOOK_UPDATE';
export const BOOK_ADD_COMMENTS = 'book/BOOK_ADD_COMMENTS';

export const set_all = book => {
  return {
    type: BOOK_SET_ALL,
    payload: {
      book: book.book,
      instructor: book.instructor,
      comments: book.comments
    }
  };
};

export const update_book = book => {
  return {
    type: BOOK_UPDATE_BOOK,
    payload: {
      book: book.book
    }
  };
};

export const update_instructor = instructor => {
  return {
    type: BOOK_UPDATE_INSTRUCTOR,
    payload: {
      instructor: instructor
    }
  };
};

export const add_comments = comments => {
  return {
    type: BOOK_ADD_COMMENTS,
    payload: {
      comments: comments
    }
  };
};
