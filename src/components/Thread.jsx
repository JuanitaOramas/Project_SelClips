import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./Thread.css"

function Thread(props) {

    const [like, setLike] = useState(props.thread.likes);
    const [flag, setFlag] = useState(true);

    console.log(like);

    const index = props.index;
    const thread = props.thread;

    const handleClick = () => {
        if (flag) {
            setLike(like + 1)
            setFlag(false)
        } else {
            setLike(like - 1)
            setFlag(true)
        }
    }



  return (

    <div className='card m-3 col-8 p-4' >
        <Link to= {`/threads/${index}`} style={{ textDecoration: 'none', color:'black' }}>
            <h4>{ thread.question }</h4>
            <p> {thread.description} </p>
            <small> <strong>tags:</strong> { thread.tags.join("-") } </small>
        </Link>

        <button className="btn gradient-custom-3 btn-sm like-thread mt-2" onClick={handleClick} > ❤ {like} </button>

    </div>

  );
}

export default Thread;
