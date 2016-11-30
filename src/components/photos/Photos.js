import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

export default class Photos extends Component {

  render() {

    const images = [
      {
        original: 'https://pp.vk.me/c636928/v636928256/388ce/enijAI4OVDo.jpg',
        thumbnail: 'https://pp.vk.me/c636928/v636928256/388ce/enijAI4OVDo.jpg'
      },
      {
        original: 'https://pp.vk.me/c636928/v636928256/388ba/5C_5fW2dsoA.jpg',
        thumbnail: 'https://pp.vk.me/c636928/v636928256/388ba/5C_5fW2dsoA.jpg'
      },
      {
        original: 'https://pp.vk.me/c636928/v636928256/3887e/R2K6c9NChso.jpg',
        thumbnail: 'https://pp.vk.me/c636928/v636928256/3887e/R2K6c9NChso.jpg'
      }
    ]

    return <div id="photos">
        <h2>ФОТОГАЛЕРЕЯ</h2>
        <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            slideInterval={2000}
            onImageLoad={this.handleImageLoad}
        />
    </div>;
  }
}