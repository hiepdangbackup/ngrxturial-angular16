import { blogReducer } from '../Blog/Blog.reducers';
import { counterReducer } from '../counter.reducer';

export const Appstate = {
  counter: counterReducer,
  blog: blogReducer,
};
