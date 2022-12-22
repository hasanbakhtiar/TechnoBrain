import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG } from "../constants/blogConstants";
const blogState = [];
export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state,action.blog];
    case EDIT_BLOG:
      return "update blog";
    case REMOVE_BLOG:
        return 'remove blog'
    default:
      return state;
  }
};
