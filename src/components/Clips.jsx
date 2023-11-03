import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './Clips.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import sleepPhoto from "../sleepFoto.png";


const Clips = () => {
    const initialItems = Array.from({ length: 20 });
    const initialCount = 1;

    const [items, setItems] = useState(initialItems);
    const [count, setCount] = useState(initialCount);

    const style = {
        height: 40,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };

    const fetchMoreData = () => {
        // Simula una llamada asíncrona

        setTimeout(() => {
            setItems([...items, ...Array.from({ length: 20 })]);
            setCount(count + 1);
        }, 1500);


    };

    return (
        <div className="clips-container">
            <h4>Clips</h4>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={count < 5}
                loader={<h5>Loading...</h5>}
            >
                <div className="cards-container">
                    {items.map((item, index) => (
                        <div className="card-clips" key={index}>
                            <p className="Title">Card #{index}</p>
                            <img src={sleepPhoto} alt="photo" style={{ width: "200px" }} />
                            <p className="Block">Some content</p>
                            <div>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat-dots-fill"></i>
                                <i className="bi bi-sticky"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>

    );
};

export default Clips;
