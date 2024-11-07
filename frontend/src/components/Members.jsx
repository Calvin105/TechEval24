import MembersGrid from "./MembersGrid"
import { useState } from "react"


const Members = () => {
  const [filterBy, setFilterBy] = useState("all")
  const [activeButton, setActiveButton] = useState(1)

  const parentToChild = (f) => {
    setFilterBy(f)
    switch (f) {
      case "all":
        setActiveButton(1)
        break
      case "top committee":
        setActiveButton(2)
        break
      case "programme":
        setActiveButton(3)
        break
      case "public relations and documentation":
        setActiveButton(4)
        break
      case "publicity and marketing":
        setActiveButton(5)
        break
      case "sponsorship":
        setActiveButton(6)
        break
      case "logistic":
        setActiveButton(7)
        break
      case "technical":
        setActiveButton(8)
        break
      case "design and multimedia":
        setActiveButton(9)
        break
    }
  }
  return (
    <div className="members-cat-sec">
      <div className="div-fixed">
        <ul className="members-cat">
          <li><h1 className="skranji-bold members-title">Meet the team.</h1></li>
          <li><a onClick={() => parentToChild("all")} className={`proza-libre-medium btn-members-cat ${activeButton === 1 ? "active": ""}`}>All</a></li>
          <li><a onClick={() => parentToChild("top committee")} className={`proza-libre-medium btn-members-cat ${activeButton === 2 ? "active": ""}`}>Top Committee</a></li>
          <li><a onClick={() => parentToChild("programme")} className={`proza-libre-medium btn-members-cat ${activeButton === 3 ? "active": ""}`}>Programme</a></li>
          <li><a onClick={() => parentToChild("public relations and documentation")} className={`proza-libre-medium btn-members-cat ${activeButton === 4 ? "active": ""}`}>Public Relations and Documentation</a></li>
          <li><a onClick={() => parentToChild("publicity and marketing")} className={`proza-libre-medium btn-members-cat ${activeButton === 5 ? "active": ""}`}>Publicity and Marketing</a></li>
          <li><a onClick={() => parentToChild("sponsorship")} className={`proza-libre-medium btn-members-cat ${activeButton === 6 ? "active": ""}`}>Sponsorship</a></li>
          <li><a onClick={() => parentToChild("logistics")} className={`proza-libre-medium btn-members-cat ${activeButton === 7 ? "active": ""}`}>Logistics</a></li>
          <li><a onClick={() => parentToChild("technical")} className={`proza-libre-medium btn-members-cat ${activeButton === 8 ? "active": ""}`}>Technical</a></li>
          <li><a onClick={() => parentToChild("design and multimedia")} className={`proza-libre-medium btn-members-cat ${activeButton === 9 ? "active": ""}`}>Design and Multimedia</a></li>
        </ul>
      </div>
      <MembersGrid parentToChild={filterBy}/>
    </div>
  )
}

export default Members
