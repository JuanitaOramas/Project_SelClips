import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

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
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Manage Tags
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Health" active={selectedOptions.includes('Health')}>
            Health
          </Dropdown.Item>
          <Dropdown.Item eventKey="Exercise" active={selectedOptions.includes('Exercise')}>
            Exercise
          </Dropdown.Item>
          <Dropdown.Item eventKey="Healthy eating" active={selectedOptions.includes('Healthy eating')}>
            Healthy eating
          </Dropdown.Item>
          <Dropdown.Item eventKey="Mental Health" active={selectedOptions.includes('Mental Health')}>
            Mental Health
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default ComboBox;