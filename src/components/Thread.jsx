import React from 'react';

function Thread(props) {

    const thread = props.thread;

    console.log(thread)

  return (
    <div className='card m-3' >
      
    <h4>{ thread.question }</h4>
    <p> {thread.description} </p>
    <small> { thread.tags.join("-") } </small>
    <button className="btn btn-success"> {thread.likes} </button>

    </div>
    
  );
}

export default Thread;
