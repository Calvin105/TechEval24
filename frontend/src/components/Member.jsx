const Member = (props) => {
  return (
    <div className="div-member">
      <div className="div-profile">

      </div>
      <p className="proza-libre-medium profile-name">{props.name}</p>
      <p className="proza-libre-medium profile-dept">{props.dept}</p>
      <p className="proza-libre-regular profile-role">{props.role}</p>
    </div>
  )
}

export default Member
