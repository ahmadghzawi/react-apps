import React, { Component } from 'react';

class ContactCard extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card text-center mb-4">
                    <div className="card-header">
                        {this.props.contact.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.contact.email}</h5>
                        <h5 className="card-title">{this.props.contact.phone}</h5>
                        <button  
                            className="btn btn-primary"
                            onClick={() => this.props.handleClick(this.props.contact.id)}
                        >
                            Go to View Details
                        </button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ContactCard;