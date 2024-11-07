import Member from "./Member"
import { useState, useEffect } from "react"

const MembersGrid = (props) => {
  const [data, setData] = useState([{}])
  let filteredData
  const API_ENDPOINT = "http://localhost:5000/about-us"

  useEffect(() => {
    fetch(API_ENDPOINT).then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    ).catch(error => console.error("Error fetching member: ", error))
  }, [])

  const filterMembersByCategory = (f, data) => {
    if (f === "all") {
      filteredData = data
    } else {
      filteredData = data.filter(item => item.dept.toLowerCase() === f)
    }
  }

  if (props.parentToChild === undefined) {
    filterMembersByCategory("all", data)
  } else {
    filterMembersByCategory(props.parentToChild, data)
  }

  const renderListOfMembers = (filteredData) => {
    return filteredData.map(member =>( <Member
                                  className="member-item"
                                  key={ member.id }
                                  name={member.name}
                                  dept={member.dept}
                                  role={member.role}
                                  imgUrl={member.imgUrl}
                                  image={member.image}
                                  fb={member.fb}
                                  ig={member.ig}
                                  li={member.li} />))
  }

  return (
    <div className="div-members">
      <div className="members-grid-container">
        {(typeof filteredData === undefined) ? (
          <p>Internal server error...?</p>
        ) : (renderListOfMembers(filteredData))}
      </div>
    </div>
  )
}

export default MembersGrid
