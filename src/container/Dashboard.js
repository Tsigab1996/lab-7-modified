import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddPost from '../component/AddPost';
import PostDetails from '../component/PostDetails';
import Posts from '../component/Posts'

export default function Dashboard() {

    const [postList, setPostList] = useState([]);
    const[flag, setFlag]= useState(true);

    const fetchData = () => {
        axios.get("http://localhost:8080/api/v1/posts").then((res) => {
            setPostList(res.data)
        }).catch(console.error())
    }

    useEffect(() => {
        fetchData();
    },[!flag])



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
        setPostDetail(true);
    }

   


    //This is deleting an object from the data base
    const deletePost=(id)=>{
        axios.delete("http://localhost:8080/api/v1/posts/"+ id)
        .then((e)=>{
            console.log("deleted")
        }).catch(console.error());
    }

    useEffect(()=>{
        deletePost();
    },[])

    


    return (
        <>
             {!postDetail && 
             
                <>
             <Posts list={postList} handlePost={handlePost} />
             <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
             <button onClick={titleHandler}>Update</button>
             </>
             }

             {postDetail && <PostDetails postDetailData={postDetailData}  deletePost= {deletePost} />}

             <AddPost/>
        </>

    )
}
