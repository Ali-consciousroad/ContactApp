import React, { Component } from 'react'
import ListContacts from './ListContacts'

/* Temporary array. Eventually we'll be retrieving and storing contacts on our backend server. */
const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class App extends Component {
  render() {
    // Show propos from the console
    console.log('Props', this.props)
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App;
