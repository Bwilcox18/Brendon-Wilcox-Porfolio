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
                        <a href="https://findcampsite.netlify.app">
                            <img src="/imgs/NucampTN.PNG" alt="" class="img-thumbnail hvr-grow" height="200" />
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <a href="https://pen-del.netlify.app">
                            <img src="/imgs/Pen-DelTN.png" alt="" class="img-thumbnail hvr-grow" height="200" />
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;