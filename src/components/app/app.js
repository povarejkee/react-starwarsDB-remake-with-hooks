import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonsPage from "../persons-page";

import './app.css';
import PlanetsPage from "../planets-page";
import StarshipsPage from "../starships-page";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonsPage />
                <PlanetsPage />
                <StarshipsPage />
            </div>
        );
    }
};
