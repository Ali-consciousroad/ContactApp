// Import React and the component our react app will be extended to from the React library
import React, { Component } from 'react'

class ListContacts extends Component {
    // render the UI of our component
    render() {
        // Show the this.props object inside the console
        console.log('Props', this.props)
        return (
            <ol className='contact-list'>
                <li>Hello world</li>
            </ol>
        )
    }
}

export default ListContacts