export const SET_TOPICS = 'topics/SET_TOPICS';

export const set_topics = topics => {
  return { type: SET_TOPICS, payload: { topics: topics } };
};
