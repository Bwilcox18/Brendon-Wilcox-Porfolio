import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import Header from './HeaderComponent';
import AboutMe from './AboutMe';


class Main extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Route path="/AboutMe" component={AboutMe}/>
                <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                        <div className="overlay">
                            <div className="content text-center">
                                <p>Nucamp</p> 
                                <hr />
                                <p>Find Your Campsite!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                        <div className="overlay">
                            <div className="content text-center">
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                        <div className="overlay">
                            <div className="content text-center">
                                <p>Cakes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;