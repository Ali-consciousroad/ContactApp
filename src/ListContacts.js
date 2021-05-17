// Import React and the component our react app will be extended to from the React library
import React, { Component } from 'react'

class ListContacts extends Component {
    // render the UI of our component
    // Show the this.props object inside the console
        // console.log('Props', this.props)
    render() {
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                     <li key={contact.id} className='contact-list-item'>
                        <div
                            className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>
                        </div>    
                        
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>

                        <button className='contact-remove'>
                            Remove             
                        </button>                       
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts