import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddPost() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [addedPost, setAddedPost] = useState({
        title: "",
        author: "",
        content: ""
    })


    const addHandler = () => {

        const copy = addedPost
        copy.title = title;
        copy.author = author;
        copy.content = content;
        setAddedPost(copy)

        axios.post("http://localhost:8080/api/v1/posts", copy).then((res) => {
            console.log("added")
        }).catch((e) => {
            console.error();
        })
    }

    useEffect(() => {
        setAddedPost(addedPost)
    }, [])

    return (
        <div>
            <h1>Add a Post</h1>

            <form id="form">
                <div id="title">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                </div>
                <div id="author">
                    <label>Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                </div>
                <div id="content">
                    <label>Content</label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={addHandler}>AddPost</button>
                </div>

            </form>
        </div>
    )
}
