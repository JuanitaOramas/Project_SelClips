import React, {useState} from 'react';

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



function SpecificThreadpage(props) {

  const [comments, setComments] = useState(infothread.comments);
  const [newComment, setNewComment] = useState("");

  const handleClick = () => {
    setComments([...comments,{user:"james",description:newComment}])
  }

  console.log(props);
  return (
    <div className='container mt-4'>
      <h2>Foro Questions</h2>

      <div className='card col-8'>
        <div className='card-body'> 
        <h4 className='card-title'>{infothread.title}</h4>
        <p>{infothread.tags.join("-")}</p>
        <div className='card-text'>{infothread.description} </div>
        <h5>Comments</h5>

        <div>
          { 
            comments.map(comment => {
              return <div> <strong>{comment.user}:</strong> {comment.description} </div>;
            })
          }
          </div>
        </div>
      </div>

      <div className="col-8" >

        <input 
          type="text" 
          className="form-control mt-4"   
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} 
          />
        <button className="btn gradient-custom-2  m-3" onClick={handleClick}>Share comment</button>
        
      </div>

    </div>
  );
}

export default SpecificThreadpage;
