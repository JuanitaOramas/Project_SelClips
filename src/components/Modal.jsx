
import React, { useState, useEffect } from 'react';
import "./Modal.css"

export default function Modal({ isOpen, toggleModal }) {

  

  return (
    isOpen ? (
      <>
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h4>Holis</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque odio culpa maxime non dolore consequuntur at! Aliquid, assumenda veritatis.</p>
              <button className='close-modal' onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      </>
    ) : null
  );

}
