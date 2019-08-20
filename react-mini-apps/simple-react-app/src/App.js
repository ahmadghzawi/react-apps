import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ContactCard from './components/ContactCard';
import ContactDetails from './components/ContactDetails'
import ContactInfo from './components/ContactInfo'

class App extends Component {
  state = { 
    contactInformation: ContactInfo
   }

   handleClick = id => {
    const choosenContactInfo = this.state.contactInformation.map(contact => {
      if (contact.id === id) {
        contact.isChoosen = true
      } else {
        contact.isChoosen = false
      }
      return contact
    });
    this.setState({contactInformation: choosenContactInfo});
   }

  render() {
    const contactCards = this.state.contactInformation.map(contactCard => 
    <ContactCard 
      key = {contactCard.id}
      contact = {contactCard}
      handleClick={this.handleClick}
    />)

    const choosenContact = this.state.contactInformation.map(contact => {
      if (contact.isChoosen) {
        return (
          <ContactDetails 
            key={contact.id} 
            contact={contact}
          />
        )
      }
      return null
    });
    
    return (
      <div className="container-fluid">
        
        <div className="App mb-4">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Simple React App</h3>
          </header>
        </div>
  
        <div className="row">
          <div className="col-md-3">
            {contactCards}
          </div>
  
          <div className="col-md-6">
            {choosenContact}
          </div>
        </div>
  
      </div>
    );
  }
}
 
export default App;

