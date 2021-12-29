import React from 'react';
import SliderIntro from 'react-native-slider-intro';

const slides = [
    {
        index: 1,
        title: 'First step',
        text: 'Simple description.',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        index: 2,
        title: 'Second step',
        text: 'Simple description for the second step.',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        index: 3,
        title: 'Third step',
        text: 'Try to make something beauty here.',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        index: 4,
        title: 'Fourth step',
        text: 'Here you can open a custom link.',
        link: 'https://pccontroller.rnstudio.hu',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
];

const IntroSlider = () => {
    return(
        <SliderIntro data={slides} />
    ) 
};
export default IntroSlider;
