import React from 'react';

const infothread= {
      title:"Esto es un foro?",
      tags:["health", "eye", "head", "ear", "vision"],
      likes: 15,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis eaque error eum accusamus doloremque! Numquam et ea voluptas, laboriosam dolorum unde repellat vel quae aliquam neque quaerat facilis delectus nisi.",
      comments: [
        {
          user:"names",
          description:"test"
        },
        {
          user:"test 2",
          description:"su comentarioo"
        },
                {
          user:"test 3",
          description:"test"
        }
      ]
}

const onHandleClick = () => {

}

function SpecificThreadpage(props) {
  console.log(props);
  return (
    <div className='container'>
      <h2>Foro Questions</h2>

      <h4>{infothread.title}</h4>
      <p>{infothread.tags.join("-")}</p>
      <p>{infothread.description} </p>
      <h5>Comments</h5>

      <div>
        { 
          infothread.comments.map(comment => {
            return <div> {comment.user}: {comment.description} </div>;
          })
        }
      </div>

      <input type="text" className="form-control" />
      <button className="btn btn-info" onClick={onHandleClick}>Share info</button>

    </div>
  );
}

export default SpecificThreadpage;
