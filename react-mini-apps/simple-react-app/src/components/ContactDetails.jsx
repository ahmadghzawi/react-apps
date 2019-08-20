import React, { Component } from 'react';

class ContactDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={this.props.contact.isChoosen ? {display: "block"} : {display: "none"}}>
                <div className="card text-center mb-4">
                    <div className="card-header">
                        {this.props.contact.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {this.props.contact.name}</h5>
                        <h5 className="card-title">Email: {this.props.contact.email}</h5>
                        <h5 className="card-title">Phone: {this.props.contact.phone}</h5>
                        <h5 className="card-title">City: {this.props.contact.city}</h5>
                        <h5 className="card-title">State: {this.props.contact.state}</h5>
                        <h5 className="card-title">Country: {this.props.contact.country}</h5>
                        <h5 className="card-title">Organization: {this.props.contact.organization}</h5>
                        <h5 className="card-title">Job Profile: {this.props.contact.jobProfile}</h5>
                        <h5 className="card-title">Additional Info: {this.props.contact.additionalInfo}</h5>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ContactDetails;
