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
          <li><h1 className="members-title skranji-bold f-60">Meet the team.</h1></li>
          <li><a onClick={() => parentToChild("all")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 1 ? rgb(15, 23, 25) : none}}>All</a></li>
          <li><a onClick={() => parentToChild("top committee")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 2 ? rgb(15, 23, 25) : none}}>Top Committee</a></li>
          <li><a onClick={() => parentToChild("programme")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 3 ? rgb(15, 23, 25) : none}}>Programme</a></li>
          <li><a onClick={() => parentToChild("public relations and documentation")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 4 ? rgb(15, 23, 25) : none}}>Public Relations and Documentation</a></li>
          <li><a onClick={() => parentToChild("publicity and marketing")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 5 ? rgb(15, 23, 25) : none}}>Publicity and Marketing</a></li>
          <li><a onClick={() => parentToChild("sponsorship")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 6 ? rgb(15, 23, 25) : none}}>Sponsorship</a></li>
          <li><a onClick={() => parentToChild("logistics")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 7 ? rgb(15, 23, 25) : none}}>Logistics</a></li>
          <li><a onClick={() => parentToChild("technical")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 8 ? rgb(15, 23, 25) : none}}>Technical</a></li>
          <li><a onClick={() => parentToChild("design and multimedia")} className="btn-members-cat proza-libre-medium" style={{backgroundColor: activeButton === 9 ? rgb(15, 23, 25) : none}}>Design and Multimedia</a></li>
        </ul>
      </div>
      <MembersGrid parentToChild={filterBy}/>
    </div>
  )
}

export default Members
