import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Comment from './Comment';

export default function PostDetails({ postDetailData, deletePost }) {
  const [comments, setComments] = useState([]);
   
  const param= useParams();
  
  
  const fetchComment = () => {
    console.log("fetched")
    axios.get("http://localhost:8080/api/v1/posts/" + postDetailData.id + "/comments")
      .then((res) => {
        console.log(res.data)
        setComments(res.data)
      }).catch(() => { console.error() });
  }



  useEffect(() => {
    fetchComment();
  }, [])
  const [list, setList] = useState([]);
  const renderComments = () => {
    console.log("show fetched comments")
    console.log(comments);
    setList(comments.map(c => <Comment id={c.id} key={c.id} name={c.name} />));
  }

  return (
    <>
      <div>

        <div id="post" onClick={renderComments} >
          <h1>ID: {postDetailData.id}</h1>
          <h1>Title: {postDetailData.title}</h1>
          <h1>Author:{postDetailData.author}</h1>
          <h1>Content:{postDetailData.content}</h1>

        </div>

        <div> <button >edit</button>
          <button onClick={() => deletePost(postDetailData.id)} >delete</button></div>

      </div>
      {list}
    </>
  )
}
