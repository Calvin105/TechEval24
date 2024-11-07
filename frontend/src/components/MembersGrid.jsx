import Member from "./Member"
import { useState, useEffect } from "react"

const MembersGrid = () => {
  const [data, setData] = useState([{}])
  const API_ENDPOINT = "http://localhost:5000/about-us"

  useEffect(() => {
    fetch(API_ENDPOINT).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  const renderListOfMembers = (data) => {
    return data.map(member =>( <Member
                                  className="member-item"
                                  name={member.name}
                                  dept={member.dept}
                                  role={member.role}></Member>))
  }

  return (
    <div className="div-members">
      <div className="members-grid-container">
        {(typeof data === undefined) ? (
          <p>Loading...</p>
        ) : (renderListOfMembers(data))}
        {/* <Member className="member-item">1</Member>
        <Member className="member-item">2</Member>
        <Member className="member-item">3</Member>
        <Member className="member-item">4</Member>
        <Member className="member-item">5</Member>
        <Member className="member-item">6</Member>
        <Member className="member-item">7</Member>
        <Member className="member-item">8</Member>
        <Member className="member-item">9</Member> */}
      </div>
    </div>
  )
}

export default MembersGrid
