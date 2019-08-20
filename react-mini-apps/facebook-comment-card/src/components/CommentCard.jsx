import React, { Component } from 'react';
import MyImage from '../photo/DSC_8641.jpg';

class CommentCard extends Component {

    render() { 
        return ( 
            <div className="mt-3">
                <img className="img-resize" src={MyImage} alt={this.props.name}/>
                <div>
                    <h5>{this.props.name} 
                        <span className="text-muted">. {this.props.nickName}</span>
                    </h5>

                    <p>{this.props.commentText}</p>

                    <p className='like-reply'>Like </p>
                    <p className='like-reply'>reply </p>
                    <h6 className='time text-muted'>. {this.props.time}</h6>
                </div>
            </div>
         );
    }
}
 
export default CommentCard;