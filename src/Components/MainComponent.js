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
                        <div class="col-12 col-md-4">
                            <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                            <div class="overlay">
                                <div class="content text-center">
                                    <h3 class="overlayText">Cakes</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                            <div class="overlay">
                                <div class="content text-center">
                                    <p className="display-5">Hello</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <img src="/imgs/NucampTN.PNG" alt="" className="img-thumbnail" height="200" />
                            <div class="overlay">
                                <div class="content text-center">
                                    <h3 class="overlayText">Cakes</h3>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default Main;