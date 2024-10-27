import React from 'react';
import './Comments.scss';

function Comments({ comments = [] }) {
    return (
        <section className="comments">
            <h2 className="comments__title">{comments.length} Comments</h2>
            <input className="comments__input" placeholder="Add a new comment" />
            <button className="comments__submit">COMMENT</button>
            <div className="comments__list">
                {comments.map(comment => (
                    <div key={comment.id} className="comments__item">
                        <p className="comments__name">{comment.name}</p>
                        <p className="comments__timestamp">
                          {new Date(comment.timestamp).toLocaleDateString()}
                        </p>
                        <p className="comments__text">{comment.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Comments;
