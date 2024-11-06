import MembersGrid from "./MembersGrid"

const Members = () => {
  return (
    <div className="members-cat-sec">
      <div className="div-fixed">
        <ul className="members-cat">
          <li><h1 className="members-title skranji-bold f-60">Meet the team.</h1></li>
          <li><a className="btn-members-cat proza-libre-medium">All</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Top Committee</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Programme</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Public Relations and Documentation</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Publicity and Marketing</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Sponsorship</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Logistics</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Technical</a></li>
          <li><a className="btn-members-cat proza-libre-medium">Design and Multimedia</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Members
