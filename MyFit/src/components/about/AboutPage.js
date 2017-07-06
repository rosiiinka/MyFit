import React, {Component} from 'react'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="text-us">
                    <h1>MyFit</h1>
                    <p>Some text about us Some text about us Some text about us Some text about us Some text about us
                        Some text about us</p>
                    <p>Some text about us Some text about us Some text about us Some text about us Some text about us
                        Some text about us</p>
                    <p>Some text about us Some text about us Some text about us Some text about us Some text about us
                        Some text about us</p>
                    <p>Some text about us Some text about us Some text about us Some text about us Some text about us
                        Some text about us</p>
                </div>
                <h2 className="founders">Founders</h2>
                <hr/>
                <div className="images">
                    <img src="images/niki.jpg" alt="niki" className="img-circle"/>
                    <img src="images/rosi.jpg" alt="rosi" className="img-circle"/>
                    <img src="images/vasko.jpg" alt="vasko" className="img-circle"/>
                </div>
            </div>
        )
    }
}

export default AboutPage

