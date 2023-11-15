import { Button, Row, Col, Dropdown } from "react-materialize";

import { useState } from "react";
import DropDown from "./DropDown";

const DeleteName = ({ onDelete, names }) => {
  // const [dropDown, setDropDown] = useState("Select");
  const [selectedValue, setSelectedValue] = useState(null);

  const options = names.map((name, i) => {
    return { value: name, label: name };
  });
  console.log(options);
  const handleSelect = (option) => {
    // setDropDown(e.target.value);
    setSelectedValue(option.value);
  };

  const handleFirstClick = (e) => {
    e.preventDefault();
    onDelete("first", null);
  };
  const handleMiddleClick = (e) => {
    e.preventDefault();
    onDelete("middle", selectedValue);
  };
  const handleLastClick = (e) => {
    e.preventDefault();
    onDelete("last", null);
  };

  return (
    <div>
      <h5>Delete Element</h5>
      <form>
        <Row>
          <Col s={12}>
            <Button onClick={handleFirstClick}>Delete First</Button>
          </Col>
          <Col s={6}>
            {names.length > 2 && (
              <Button onClick={handleMiddleClick}>Delete = </Button>
            )}
          </Col>
          <Col s={6}>
            {names.length > 2 && (
              <DropDown options={options} onSelect={handleSelect} />
            )}
            {/* <select value={dropDown} onChange={handleSelect}>
              <option value="">Select...</option>
              {names.map((name, i) => {
                return (
                  <option key={i} value={name}>
                    {name}
                  </option>
                );
              })}
            </select> */}
            {/* <Dropdown
              id="Dropdown_8"
              onChange={handleSelect}
              trigger={<Button node="button">{dropDown}</Button>}>
              {names.map((name, i) => {
                return (
                  <a key={i} href="#">
                    {name}
                  </a>
                )
              })}
            </Dropdown> */}
          </Col>
          <Col s={12}>
            <Button onClick={handleLastClick}>Delete Last</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default DeleteName;
