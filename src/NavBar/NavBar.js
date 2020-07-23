import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <p class="navbar-brand">Navbar</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <p >Home <span class="sr-only">(current)</span></p>
                    </li>
                    <li class="nav-item">
                        <p  >Features</p>
                    </li>
                    <li class="nav-item">
                        <p  >Pricing</p>
                    </li>
                    <li class="nav-item">
                        <p  >About</p>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;