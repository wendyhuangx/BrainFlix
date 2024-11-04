import React from "react";
import { useNavigate } from "react-router-dom";

function UploadPage(){
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Upload Complete');
        navigate('/');
    };

    return (
        <div className="upload-page">
            <h1>Upload Video</h1>
            <form onSubmit={handleSubmit}>
                <label>VIDEO THUMBNAIL</label>
                <img src="" alt="video thumbnail"/>
                <label>TITLE YOUR VIDEO</label>
                <input type="text" name="title" required />
                <label>ADD A VIDEO DESCRIPTION</label>
                <textarea name="description" required></textarea>
                <button type="submit">PUBLISH</button>
                <button type="cancel">CANCEL</button>
            </form>
        </div>
    )
}

export default UploadPage;