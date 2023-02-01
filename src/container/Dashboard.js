import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostDetails from '../component/PostDetails';
import Posts from '../component/Posts'

export default function Dashboard() {

    // const list=[
    //     {id:"111", title:"Happiness", author:"John"},
    //     {id:"112", title:"MIU", author:"Dean"},
    //     {id:"113", title:"Enjoy Life", author:"Jasmine"}
    // ]
    const [postList, setPostList] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/api/v1/posts").then((res) => {
            setPostList(res.data)
        }).catch(console.error())
    }

    useEffect(() => {
        fetchData();
    },[])



    const [title, setTitle] = useState('');


    const titleHandler = () => {
        const post = [...postList];
        post[0].title = title;
        setPostList(post);
    }
    const[postDetail, setPostDetail]=useState(false);
 const[postDetailData, setPostDetailData]=useState({
        id:"",
        title:"",
        author:"",
        content:""
    });
    const handlePost=(data)=>{
        setPostDetailData(data);
        setPostDetail(true)
    }


    return (
        <>
             {!postDetail && 
             
                <>
             <Posts list={postList} handlePost={handlePost} />
             <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
             <button onClick={titleHandler}>Update</button>)
             </>
             }

             {postDetail && <PostDetails postDetailData={postDetailData}/>}
        </>

    )
}
