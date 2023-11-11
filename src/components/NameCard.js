import { Card } from "react-materialize"

const NameCard = ({ name }) => {
  const styles = {
    display: "inline-block",
    width: "200px"
  }
  return (
    <Card
      style={styles}
      className="blue-grey darken-1"
      textClassName="white-text"
      title={name}></Card>
  )
}

export default NameCard
