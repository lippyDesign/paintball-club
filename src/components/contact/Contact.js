import React, { Component } from 'react';

import InterestForm from '../../containers/interestForm/interestForm';

export default class Contact extends Component {
  render() {
    return <div id="contact">
      <h2>СВЯЗАТЬСЯ</h2>
      <InterestForm />
    </div>;
  }
}