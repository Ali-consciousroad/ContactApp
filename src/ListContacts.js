// Import React and the component our react app will be extended to from the React library
import React, { Component } from 'react'

class ListContacts extends Component {
    // render the UI of our component
    render() {
        // Show the this.props object inside the console
        // console.log('Props', this.props)
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                    <div>
                        <li>Hello world</li>
                        {/* This allows us to update only the specific element and not all the list */}
                        <li key={contact.id}>
                        {contact.name}
                        </li>
                    </div>
                ))}
            </ol>
        )
    }
}

export default ListContacts