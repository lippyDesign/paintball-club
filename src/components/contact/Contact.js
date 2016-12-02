import React, { Component } from 'react';
import Map from './Map';

export default class Contact extends Component {
    render() {
        return <div id="contact">
            <h2>СВЯЖИТЕСЬ С НАМИ</h2>
            <div className="col-xs-12 col-lg-4">
                <h3>Запись на игру по тел:</h3>
                <p>+7 (960) 21 777 46 Михаил</p>
                <p>+7 (953) 540 88 97 Максим</p>
            </div>
            <div className="col-xs-12 col-lg-8">
                <h3>Место Нахождения</h3>
                <Map/>
            </div>
        </div>;
    }
}