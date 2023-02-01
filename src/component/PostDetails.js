import React from 'react'

export default function PostDetails({postDetailData}) {
  return (
    <div id="post">
    <h1>ID: {postDetailData.id}</h1>
    <h1>Title: {postDetailData.title}</h1>
    <h1>Author:{postDetailData.author}</h1>
    <h1>Content:{postDetailData.content}</h1>
    <button>edit</button>
    <button>delete</button>
  </div>
  )
}
