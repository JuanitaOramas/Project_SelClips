import React from 'react';
import Thread from '../components/Thread';

const threads = [
  {
    question: "Esto es un foro?",
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
    question: "Otro ejemplo de pregunta sobre salud ocular.",
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
    question: "¿Cómo cuidar la salud auditiva?",
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
