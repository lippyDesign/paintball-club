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
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/3202a/08zDgeATSZ8.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/3202a/08zDgeATSZ8.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/3200d/GJubp23GokI.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/3200d/GJubp23GokI.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/32020/qDfaXbkZxPE.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/32020/qDfaXbkZxPE.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/32048/2VjNE7pM8Fc.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/32048/2VjNE7pM8Fc.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/31f08/SwuzPa-eGTA.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/31f08/SwuzPa-eGTA.jpg'
      },
      {
        original: 'https://pp.vk.me/c637130/v637130642/1d649/L4Btlfgauk4.jpg',
        thumbnail: 'https://pp.vk.me/c637130/v637130642/1d649/L4Btlfgauk4.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/31523/CNff3438NcU.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/31523/CNff3438NcU.jpg'
      },
      {
        original: 'https://pp.vk.me/c837520/v837520642/f231/7deNJR47l30.jpg',
        thumbnail: 'https://pp.vk.me/c837520/v837520642/f231/7deNJR47l30.jpg'
      },
      {
        original: 'https://pp.vk.me/c626329/v626329642/314f1/pCKFJ_4-xQk.jpg',
        thumbnail: 'https://pp.vk.me/c626329/v626329642/314f1/pCKFJ_4-xQk.jpg'
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