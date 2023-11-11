import { Row, Col } from "react-materialize"

import NameCard from "./NameCard"

const NameList = ({ names }) => {
  const renderedItems = names.map((name, i) => {
    return (
      <Row key={i}>
        <Col m={6} s={6}>
          <NameCard name={name} />
        </Col>
      </Row>
    )
  })
  return renderedItems
}

export default NameList
