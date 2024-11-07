import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Member = ({name, dept, role, imgUrl, image, fb, ig, li}) => {
  return (
    <div className="div-member">
      <div className="div-profile">
        <img src={image} alt={imgUrl} className="member-profile"/>
        <div className="white-span"></div>
      </div>
      <p className="proza-libre-medium profile-name">{name}</p>
      <p className="proza-libre-medium profile-dept">{dept}</p>
      <p className="proza-libre-regular profile-role">{role}</p>
      <div className='profile-social-media'>
        <a href={fb} target="_blank" rel="noopener noreferrer">
          <FaFacebook className='fb-icon'/>
        </a>
        <a href={ig} target="_blank" rel="noopener noreferrer">
          <FaInstagram className='ig-icon'/>
        </a>
        <a href={li} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='li-icon'/>
        </a>
      </div>
    </div>
  )
}

export default Member
