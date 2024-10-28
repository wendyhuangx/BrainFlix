import React from 'react';
import './Comments.scss';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';
import commentImage from '../../assets/Icons/add_comment.svg';


function Comments({ comments = [] }) {
    return (
        <section className="comments">
            <h2 className="comments__title">{comments.length} Comments</h2>
            
            <form id="comment-form">
                <div class="input__container">
                    <div class="comment__profile">
                        <img src={profileImage} alt="Profile" class="profile-image"/>
                    </div>
                    <div className="comments__comment-fields">
                        <div className='comments__comment-form-header'>
                            <label for="comment">JOIN THE CONVERSATION</label>
                            <textarea id="comment" placeholder="Add a new comment" required></textarea>
                        </div>
                        <button className="comments__comment-button">
                            <img src={commentImage} alt='Comment Icon' className='comments__comment-icon'/>
                            <span className='comments__comment-text'>COMMENT</span>
                        </button>
                    </div>
                </div>
            </form>
            <hr/>


            <div className="comments__list">
                {comments.map(comment => (
                    <div key={comment.id} className="comments__item">
                        <img src={profileImage} alt='profile image' className='comments__comment-fields-profile'/>
                        <div className='comments__comment-container'>
                            <div className='comments__comment-headline'>
                                <p className="comments__name">{comment.name}</p>
                                <p className="comments__timestamp">
                                {new Date(comment.timestamp).toLocaleDateString()}
                                </p>
                            </div>
                            <p className="comments__text">{comment.comment}</p>
                            <hr className='comments__divider'/>
                            </div>

                    </div>

                ))}
            </div>
        </section>
    );
}

export default Comments;
