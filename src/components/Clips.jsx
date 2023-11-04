import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './Clips.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sleepPhoto from "../sleepFoto.png";
import Modal from '../pages/Components/Modal';


const Clips = () => {
    const initialItems = Array.from({ length: 20 });
    const initialCount = 1;
    
    const [heartColor, setHeartColor] = useState('#EFF3F6'); 
    const [items, setItems] = useState(initialItems);
    const [count, setCount] = useState(initialCount);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems([...items, ...Array.from({ length: 20 })]);
            setCount(count + 1);}, 1500);
    };
    const handleHeartClick = () => {setHeartColor(heartColor === 'red' ? '#EFF3F6' : 'red');
    };

    const openModal = () => {setIsModalOpen(true);
    };

    const closeModal = () => {setIsModalOpen(false);
    };


    return (
        <div className="clips-container">
            <h4 className='title'>Your Feed</h4>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={count < 5}
                loader={<h5>Loading...</h5>}
                style={{ overflow: 'hidden' }}
                
            >
                <div className="cards-container-clips">
                    {items.map((item, index) => (
                        <div className="card-clips" key={index}>
                            <div className="sub-card-clips justify-content-center">
                                <p className="userCreator">@health_cookie</p>
                                {/* <img className="img" src={sleepPhoto} alt="photo" style={{ width: "200px" }} /> */}
                                <iframe  height="280" src="https://www.youtube.com/embed/zBEgoOhBXmY"></iframe>
                                <div className="icons-container ">
                                    <Modal />
                                   <i className="bi bi-heart-fill heartIcon" style={{ color: heartColor }}
                                    onClick={handleHeartClick}></i>
                                    <i class="bi bi-send-fill sendIcon"></i>
                                    
                                </div>
                                <div> <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nemo, veritatis.</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            
        </div>

    );
}

export default Clips;
