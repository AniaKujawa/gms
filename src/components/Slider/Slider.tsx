import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import './slider.css';
import { Image } from '../../types';

const AutoplaySlider = withAutoplay(AwesomeSlider);

type Props = {
  images: Image[];
}

export const Slider = ({ images }: Props) => (
  <AutoplaySlider play interval={6000}>
    {images.map(img => (
      <div key={img.id} data-src={img.url} />
    ))}
  </AutoplaySlider>
);