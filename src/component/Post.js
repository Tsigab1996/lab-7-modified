import React from 'react'
import './Post.css'

export default function Post({id, title, author,content, handlePost}) {
  return (
  <div id="post" onClick={()=>{
    handlePost({id:id, title:title, author:author,content:content})
  }}>
    <h1>ID: {id}</h1>
    <h1>Title: {title}</h1>
    <h1>Author:{author}</h1>
  </div>
  )
}
