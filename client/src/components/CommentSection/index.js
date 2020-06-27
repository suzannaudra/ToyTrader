import React, { Component } from 'react';
import './style.css';

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: true,
            comments: [
                { id: 1, author: "Ryan", body: "This is my first comment on this forum so don't be mean" },

            ]
        };
    }

    render() {
        const comments = this._getComments();
        let commentNodes;


        if (this.state.showComments) {

            commentNodes = <div className="comment-list">{comments}</div>;
        }

        return (
            <div className="comment-box">
                <h2>Join the Discussion!</h2>
                <br></br>
                <h4 className="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>
                <br></br>
                {commentNodes}
                <CommentForm addComment={this._addComment.bind(this)} />
            </div>
        );
    };

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        };
        this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }

    _handleClick() {
        this.setState({
            showComments: this.state.showComments
        });
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (
                <Comment
                    author={comment.author}
                    body={comment.body}
                    key={comment.id} />
            );
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return "1 comment";
        } else {
            return `${commentCount} comments`;
        }
    }
} // end CommentBox component

class CommentForm extends React.Component {
    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className="comment-form-fields">
                    <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
                    <textarea placeholder="Comment" required ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">Post Comment</button>
                </div>
            </form>
        );
    } // end render

    _handleSubmit(event) {
        event.preventDefault();   // prevents page from reloading on submit
        let author = this._author;
        let body = this._body;
        this.props.addComment(author.value, body.value);
    }
} // end CommentForm component

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="comment-header">{this.props.author}</h2>
                <p className="comment-body">- {this.props.body}</p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
                </div>
            </div>
        );
    }
    _deleteComment() {
        alert("-- DELETE Comment Functionality COMMING SOON...");
    }
}


export default CommentBox;