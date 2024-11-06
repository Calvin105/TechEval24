import { useState } from 'react'
import vhackLogo from '../assets/VHACK_Logo.png'

const Navbar = () => {
    let [texture, setTexture] = useState(true)
    const changeTexture = () => {
        if (window.scrollY > 100) {
            setTexture(true)
        } else {
            setTexture(false)
        }
    }
    window.addEventListener("scroll", changeTexture, true)

    return (
        <nav className={texture ? "navbar-scroll" : "navbar"}>
            <div className="navbar-left">
                <a href="#home">
                    <img className="icon-1" src={vhackLogo}/>
                    <div className="icon-2 skranji-bold f-25">V HACK</div>
                </a>
            </div>

            <div className="navbar-right">
                <ul className="nav-list">
                    <li className="nav-item proza-libre-medium"><a href="#home">Home</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#tentative">Tentative</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#speakers">Speakers</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#judges">Judges</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#mentors">Mentors</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#partners">Partners</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#faqs">FAQs</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#rules">Rules</a></li>
                    <li className="nav-item proza-libre-medium"><a href="#team">Organising Team</a></li>
                </ul>
                <div className='div-login'>
                    <a className="btn-login proza-libre-medium" href="#login">Log In</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
