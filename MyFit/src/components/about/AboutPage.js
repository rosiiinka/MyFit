import React, {Component} from 'react'

class AboutPage extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="about-jumbotron">
                    <h1>MyFit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                     efficitur ligula non turpis egestas, nec lacinia sem posuere. 
                     Etiam at cursus neque, ac rutrum sapien. Sed rutrum laoreet felis
                     vitae tincidunt. In volutpat tempor ligula. Vestibulum scelerisque, 
                     augue ut fringilla pretium, augue dolor pellentesque purus, quis euismod
                     lorem lectus volutpat erat. Sed sed erat
                     eu mi maximus consequat quis sed nibh. Vivamus varius tincidunt ultricies.</p>
                </div>

                <div className="founders">
                    <h2 className="heading">Founders</h2>

                    <div className="flex-prifle">
                        <div className="flex-child">
                            <img src="images/niki.jpg" alt="niki" className="img-circle"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            efficitur ligula non turpis egestas, nec lacinia sem posuere. 
                            Etiam at cursus neque, ac rutrum sapien.</p>
                        </div>
                        <div className="flex-child">
                            <img src="images/rosi.jpg" alt="rosi" className="img-circle"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            efficitur ligula non turpis egestas, nec lacinia sem posuere. 
                            Etiam at cursus neque, ac rutrum sapien.</p>
                        </div>
                        <div className="flex-child">
                            <img src="images/vasko.jpg" alt="vasko" className="img-circle"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            efficitur ligula non turpis egestas, nec lacinia sem posuere. 
                            Etiam at cursus neque, ac rutrum sapien.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage

