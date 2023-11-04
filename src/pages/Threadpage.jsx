import React from 'react';
import Thread from '../components/Thread';

const threads = [
  {
    question: <span style={{ color: 'rgb(56,74,88)' }}>Is this a Threat?</span>,
    tags: ["health", "eye", "head", "ear", "vision"],
    likes: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste molestiae quibusdam ex eligendi debitis!",
    comments: [
      {
        user: "2pac",
        description: "great forum bro",
        likes: 2
      }
    ]
  },
  {
    question: <span style={{ color: 'rgb(56,74,88)' }}>The greatest wealth is health.</span>,
    tags: ["health", "eye"],
    likes: 10,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste molestiae quibusdam ex eligendi debitis!",
    comments: [
      {
        user: "2pac",
        description: "great forum bro",
        likes: 2
      }
    ]
  },
  {
    question:<span style={{ color: 'rgb(56,74,88)' }}>¿Cómo cuidar la salud auditiva?</span> ,
    tags: ["health", "ear"],
    likes: 8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste molestiae quibusdam ex eligendi debitis!",
    comments: [
      {
        user: "2pac",
        description: "great forum bro",
        likes: 2
      }
    ]
  }, 
  {
    question:<span style={{ color: 'rgb(56,74,88)' }}>Health is a state of body. Wellness is a state of being.</span> ,
    tags: ["health", "body"],
    likes: 8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste molestiae quibusdam ex eligendi debitis!",
    comments: [
      {
        user: "2pac",
        description: "great forum bro",
        likes: 2
      }
    ]
  }
];



function Threadpage() {
  return (
    <div className='container' >
      <h2>Foro Questions</h2>
      <div>
        { 
        
        threads.map((thread,idx)=>{
          return <Thread key={idx} thread={thread} index={idx}/>
        })

        }
      </div>

    </div>
    
  );
}

export default Threadpage;
