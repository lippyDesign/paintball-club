import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return <div id="contact">
                <h3>Телефон</h3>
                <p>
                    <a href="tel:+79602177746">
                        <i className="fa fa-phone" aria-hidden="true"></i> +7 (960) 21 777 46
                    </a> Михаил
                </p>
                <p>
                    <a href="tel:+79535408897">
                        <i className="fa fa-phone" aria-hidden="true"></i> +7 (953) 540 88 97
                    </a> Максим
                </p>
                <h3>В Контакте</h3>
                <p>
                    <a target="_blank" href="https://vk.com/thegamekondopoga">
                        <i className="fa fa-vk fa-3x" aria-hidden="true"></i>
                    </a>
                </p>
        </div>;
    }
}