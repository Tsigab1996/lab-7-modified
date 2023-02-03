import React from 'react'
import Post from './Post'


export default function Posts({ list , handlePost}) {

  

    const postList = list.map(p =>
        <>
            <button key={p.id}>
                <Post id={p.id} key={p.id} title={p.title} author={p.author} content={p.content} handlePost= {handlePost} />
            </button>
        </>

    )
    return (
       postList
    )
}
