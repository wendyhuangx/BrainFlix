import React from 'react';
import "./Header.scss";
import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import logoImage from '../../assets/Logo/BrainFlix-logo.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';
import {useNavigate} from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const handleUploadClick= () => {
        navigate('/upload');
    }
    const handleLogoClick = () => {
        navigate('/');
    }
    return (
        <header className="header">

            <img src={logoImage} alt='Logo' className='header__logo' onClick={handleLogoClick}/>

            <div className='header__right'>

                <div className='header__search-container'>
                    <img src={searchIcon} alt='search icon' className='header__search-icon'/>
                    <input type="text" className="header__search" placeholder="Search" />
                    <img src={profileImage} alt='profile image' className='header__profile-image'/>

                    

                </div>
                <button className="header__upload" onClick={handleUploadClick}>
                    <img src={uploadIcon} alt='Upload Icon' className='header__upload-icon'/>
                    <span className='header__upload-text'>UPLOAD</span>
                </button>
                <img src={profileImage} alt='profile image' className='header__profile-image2'/>
            </div>
      </header>
    );
}

export default Header;