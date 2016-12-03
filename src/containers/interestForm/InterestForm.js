import React, { Component } from 'react';
import axios from 'axios';

export default class InterestForm extends Component {

    sendEmail(e) {
        e.preventDefault();

        axios.post('/contactus', {
            name: this.refs.name.value.trim(),
            email: this.refs.email.value.trim(),
            date: this.refs.date.value.trim(),
            phone: this.refs.phone.value.trim(),
            numPlayers: this.refs.numPlayers.value.trim(),
            comments: this.refs.comments.value.trim()
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.date.value = '';
        this.refs.phone.value = '';
        this.refs.numPlayers.value = '';
        this.refs.comments.value = '';
    }

    render() {
        return <form onSubmit={this.sendEmail.bind(this)} className="interestForm">
            <label>Имя и Фамилия</label>
            <input type="text"  ref="name" placeholder="Имя и Фамилия" />
            <label>Номер Tелефона</label>
            <input type="tel"  ref="phone" placeholder="Номер Tелефона" />
            <label>Адрес Электронной Почты</label>
            <input type="email"  ref="email" placeholder="Адрес Электронной Почты"/>
            <label>Дата Мероприятия</label>
            <input type="date"  ref="date" placeholder="Дата Мероприятия"/>
            <label>Количество Игроков</label>
            <input type="num"  ref="numPlayers" placeholder="Количество Игроков"/>
            <label>Комментарии</label>
            <textarea ref="comments" placeholder="Комментарии"></textarea>
            <button><i className="fa fa-envelope"></i> Отправить</button>
        </form>
    }
}
