import { Button, Row, Col, Dropdown } from "react-materialize"

import { useState } from "react"

const DeleteName = ({ onDelete, names }) => {
  const [dropDown, setDropDown] = useState("Select")

  const handleSelect = (e) => {
    setDropDown(e.target.value)
  }

  const handleFirstClick = (e) => {
    e.preventDefault()
    onDelete("first")
  }
  const handleMiddleClick = (e) => {
    e.preventDefault()
    onDelete(name, "middle")
  }
  const handleLastClick = (e) => {
    e.preventDefault()
    onDelete("last")
  }

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
              <Button onClick={handleMiddleClick}>Delete Middle</Button>
            )}
          </Col>
          <Col s={6}>
            <select value={dropDown} onChange={handleSelect}>
              <option value="">Select...</option>
              {names.map((name, i) => {
                return (
                  <option key={i} value={name}>
                    {name}
                  </option>
                )
              })}
            </select>
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
  )
}

export default DeleteName
