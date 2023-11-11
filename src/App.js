import { Row, Col } from "react-materialize"

import { useState } from "react"

import AddName from "./components/AddName"
import DeleteName from "./components/DeleteName"
import NameList from "./components/NameList"

export default function App() {
  const [names, setNames] = useState([])

  const onAdd = (newName, postion) => {
    //Adding to beginning of the array
    if (postion === "first") {
      setNames([newName, ...names])
    }
    //Adding to middle of the array
    else if (postion === "middle") {
    }
    //Adding to end of the array
    else {
      setNames([...names, newName])
    }
  }

  const onDelete = (postion) => {
    if (postion === "first") {
      const newArray = names.slice(1)
      setNames(newArray)
    }
    //Adding to middle of the array
    else if (postion === "middle") {
    }
    //Adding to end of the array
    else {
      const newArray = names.slice(0, names.length - 1)
      setNames(newArray)
    }
  }
  return (
    <div className="App">
      <Row>
        <Col s={6}>
          <Row>
            <Col s={12}>
              <AddName onAdd={onAdd} names={names} />
            </Col>
            <Col s={12}>
              <DeleteName onDelete={onDelete} names={names} />
            </Col>
          </Row>
        </Col>
        <Col s={6}>
          <NameList names={names} />
        </Col>
      </Row>
    </div>
  )
}
