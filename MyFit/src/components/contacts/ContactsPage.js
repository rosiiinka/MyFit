import React, {Component} from 'react';


export default class ContactsPage extends Component {
    render() {
        return (
                <div>
                    <div className="row">
                        <h1>Contact</h1>
                    </div>

                    <div className="row">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11734.271460542474!2d23.3540749!3d42.67051205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1499339179300" 
                            width="400"
                            height="300"
                            frameborder="0" 
                            allowfullscreen></iframe>
                    </div>
               </div>
        );
    }
}
