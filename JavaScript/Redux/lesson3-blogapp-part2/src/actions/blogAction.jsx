import { ADD_BLOG, EDIT_BLOG, REMOVE_BLOG } from "../constants/blogConstants"
import { v4 as uuid } from 'uuid';
export const addBlog=({title,desc,img})=>({
    type:ADD_BLOG,
    blog:{
        id:uuid(),
        title:title,
        desc:desc,
        img:img
    }
})

export const editBlog=()=>({
    type:EDIT_BLOG
})

export const removeBlog=()=>({
    type:REMOVE_BLOG
})