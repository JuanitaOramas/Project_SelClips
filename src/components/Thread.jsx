import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Thread(props) {

    const [like, setLike] = useState(props.thread.likes);

    console.log(like);

    const index = props.index;
    const thread = props.thread;

    const onHandleClick = () => {
        setLike(like + 1)
    }



  return (

    <div className='card m-3' >
    <Link to= {{
        pathname: `/threads/${index}`,
        state: { threadProps: thread }
    }}  
  style={{ textDecoration: 'none', color:'black' }}>
        <h4>{ thread.question }</h4>
        <p> {thread.description} </p>
        <small> { thread.tags.join("-") } </small>
    </Link>
    <button className="btn btn-success" onClick={onHandleClick}> {like} </button>

    </div>

  );
}

export default Thread;
