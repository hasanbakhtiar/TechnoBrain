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

export const editBlog=(id,update)=>({
    type:EDIT_BLOG,
    id,
    update
})

export const removeBlog=({id})=>({
    type:REMOVE_BLOG,
    id:id
})