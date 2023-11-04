import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './profile.css';

function ComboBox() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDropdownSelect = (eventKey) => {
    if (selectedOptions.includes(eventKey)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== eventKey));
    } else {
      setSelectedOptions([...selectedOptions, eventKey]);
    }
  };

  return (
    <div>
      <Dropdown onSelect={handleDropdownSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="custom-dropdown-toggle">
        Manage Tags
      </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="tag-container">
            <Dropdown.Item eventKey="Health" active={selectedOptions.includes('Health')}>
              Health
            </Dropdown.Item>
          </div>
          <div className="tag-container">
            <Dropdown.Item eventKey="Exercise" active={selectedOptions.includes('Exercise')}>
              Exercise
            </Dropdown.Item>
          </div>
          <div className="tag-container">
            <Dropdown.Item eventKey="Healthy eating" active={selectedOptions.includes('Healthy eating')}>
              Healthy eating
            </Dropdown.Item>
          </div>
          <div className="tag-container">
            <Dropdown.Item eventKey="Mental Health" active={selectedOptions.includes('Mental Health')}>
              Mental Health
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <div className="selected-tags">
        {selectedOptions.map((tag) => (
          <div key={tag} className="tag-container selected">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComboBox;