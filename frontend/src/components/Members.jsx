import MembersGrid from "./MembersGrid"
import { useState } from "react"


const Members = () => {
  const [filterBy, setFilterBy] = useState("all")

  const parentToChild = (f) => {
    setFilterBy(f)
  }
  return (
    <div className="members-cat-sec">
      <div className="div-fixed">
        <ul className="members-cat">
          <li><h1 className="members-title skranji-bold f-60">Meet the team.</h1></li>
          <li><a onClick={() => parentToChild("all")} className="btn-members-cat proza-libre-medium">All</a></li>
          <li><a onClick={() => parentToChild("top committee")} className="btn-members-cat proza-libre-medium">Top Committee</a></li>
          <li><a onClick={() => parentToChild("programme")} className="btn-members-cat proza-libre-medium">Programme</a></li>
          <li><a onClick={() => parentToChild("public relations and documentation")} className="btn-members-cat proza-libre-medium">Public Relations and Documentation</a></li>
          <li><a onClick={() => parentToChild("publicity and marketing")} className="btn-members-cat proza-libre-medium">Publicity and Marketing</a></li>
          <li><a onClick={() => parentToChild("sponsorship")} className="btn-members-cat proza-libre-medium">Sponsorship</a></li>
          <li><a onClick={() => parentToChild("logistics")} className="btn-members-cat proza-libre-medium">Logistics</a></li>
          <li><a onClick={() => parentToChild("technical")} className="btn-members-cat proza-libre-medium">Technical</a></li>
          <li><a onClick={() => parentToChild("design and multimedia")} className="btn-members-cat proza-libre-medium">Design and Multimedia</a></li>
        </ul>
      </div>
      <MembersGrid parentToChild={filterBy}/>
    </div>
  )
}

export default Members
