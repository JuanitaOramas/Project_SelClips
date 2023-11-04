import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import "./css/SpecificThreadpage.css"

const infothread= {
      title:"Is this a Threat?",
      tags:["health", "eye", "head", "ear", "vision","body" ],
      likes: 15,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis eaque error eum accusamus doloremque! Numquam et ea voluptas, laboriosam dolorum unde repellat vel quae aliquam neque quaerat facilis delectus nisi.",
      comments: [
        {
          user:"sam",
          description:"Yes, I think so..",
          profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVzcOZEqLQk9Ma142okaHnitwOAvlaCgTw&usqp=CAU",
          style: { backgroundcolor: "gray" }
        },
        {
          user:"tom",
          description:"Your comment",
          profile: "https://media.karousell.com/media/photos/products/2023/2/23/female_personal_trainer_pasir__1677119828_9113f322_progressive.jpg"

        },
                {
          user:"kim",
          description:"test",
          profile: "https://lirp.cdn-website.com/57372278/dms3rep/multi/opt/blog075-640w.png"

        }
      ]
}



function SpecificThreadpage(props) {

  const [comments, setComments] = useState(infothread.comments);
  const [newComment, setNewComment] = useState("");
  const [heart, setHeart] = useState("bi bi-heart");
  const [like, setLike] = useState(infothread.likes);
  const [flag, setFlag] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const { id } = useParams();

  const handleClick = () => {
    const myComment = {
      user:"james",
      description:newComment,
      profile: "https://www.peanuts.com/sites/default/files/sn-color.jpg"
    }
    if(newComment.length>0)setComments([...comments,myComment]);
  }

  const handleClickLike = () => {
    if (flag) {
      setLike(like + 1)
      setHeart("bi bi-heart-fill")
      setFlag(false)
  } else {
      setLike(like - 1)
      setHeart("bi bi-heart")
      setFlag(true)
  }
    
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/threads/${id}`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  console.log(props);
  return (
    <div className='container mt-4'>
      <div className='card col-8'>
        <div className='card-body'> 
        <h4 className='card-title'>{infothread.title}</h4>
        <p>{infothread.tags.join("-")}</p>
        <p> <i className="bi bi-arrow-right" onClick={handleCopy}></i> Share this post! </p>
        {showAlert && <div className="alert alert-success">Copied to clipboard 😄!</div>}
        <div className='card-text'>{infothread.description} </div>
        <div onClick={handleClickLike}> <i className={`${heart}`}></i> {like} </div>
        <h5 className="mt-5">Comments</h5>
        <ul className="list-group list-group-flush">
          { 
            comments.map((comment,idx) => {
              return(
                <li key={idx} className="list-group-item">
                  <div className="user-comment" >
                    <div className="">
                      <img className="img-comment" src={comment.profile} alt="avatar"/>
                      <p className="description-user">{comment.user}</p>
                      
                    </div>
                    <div className="description">
                      <p className="description-comment">{comment.description} </p>
                    </div>
                  </div>
                </li>
              ); 
            })
          }
          </ul>
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
