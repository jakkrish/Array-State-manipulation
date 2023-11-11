import { Button, TextInput, Row, Col } from "react-materialize"
import { useState, useRef } from "react"

const AddName = ({ onAdd, names }) => {
  const [name, setName] = useState("")
  const inputRef = useRef()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleFirstClick = (e) => {
    e.preventDefault()
    onAdd(name, "first")
    setName("")
    inputRef.current.focus()
  }
  const handleMiddleClick = (e) => {
    e.preventDefault()
    onAdd(name, "middle")
    setName("")
    inputRef.current.focus()
  }
  const handleLastClick = (e) => {
    e.preventDefault()
    onAdd(name, "last")
    setName("")
    inputRef.current.focus()
  }

  return (
    <div>
      <h5>Insert Element</h5>
      <form>
        <TextInput ref={inputRef} value={name} onChange={handleChange} />
        <Row>
          <Col s={12}>
            <Button onClick={handleFirstClick}>Add First</Button>
          </Col>
          <Col s={12}>
            {names.length > 2 && (
              <Button onClick={handleMiddleClick}>Add Middle</Button>
            )}
          </Col>
          <Col s={12}>
            {" "}
            <Button onClick={handleLastClick}>Add Last</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default AddName
