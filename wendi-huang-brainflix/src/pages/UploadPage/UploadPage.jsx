import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import publishIcon from '../../assets/Icons/publish.svg';
import './UploadPage.scss';
import UploadPreview from '../../assets/Images/Upload-video-preview.jpg';
import { postVideos } from "../../api";


function UploadPage(){
    const navigate = useNavigate();
    const [title, setTitle] =useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newVideo = {
            title: title,
            description: description,
        };
        postVideos(newVideo);

        alert('Upload Complete');
        navigate('/');
    };

    return (
        <div className="full-page">
            <Header />
            <hr></hr>
            <div className="upload-page">
                <h1 className="upload-page__title">Upload Video</h1>
                <hr className="upload-page__title-line"></hr>
                <form onSubmit={handleSubmit}>
                    <div className="upload-page__form-container">
                        <div className="upload-page__preview-container">
                            <label className="upload-page__labels">VIDEO THUMBNAIL</label>
                            <img src={UploadPreview} alt="video thumbnail" className="upload-page__preview-image"/>
                        </div>
                        <div className="upload-page__input-container">
                            <label className="upload-page__labels">TITLE YOUR VIDEO</label>
                            <input type="text" name="title" value={title} onChange= {(e) => setTitle(e.target.value)} placeholder="Add a title to your video" required />
                            <label className="upload-page__labels">ADD A VIDEO DESCRIPTION</label>
                            <textarea name="description" value={description} onChange= {(e) => setDescription(e.target.value)} placeholder="Add a description to your video" required></textarea>
                        </div>
                    </div>
                    <hr className="upload-page__title-line"></hr>
                    <div className="upload-page__button-container">
                        <button className="upload-page__publish">
                            <img src={publishIcon} alt='Upload Icon' className='upload-page__publish-icon'/>
                            <span className='upload-page__publish-text'>PUBLISH</span>
                        </button>
                        <button className="upload-page__cancel">CANCEL</button>
                        <button className="upload-page__publish-big">
                            <img src={publishIcon} alt='Upload Icon' className='upload-page__publish-icon'/>
                            <span className='upload-page__publish-text'>PUBLISH</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadPage;