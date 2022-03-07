import React from 'react';
import SliderIntro from 'react-native-slider-intro';
import { View, Text , styles } from 'react-native';

const slides = [
    {
        key: 1,
        title: 'Welcome To The Guard',
        text: 'Don\'t worry anymore We are watching and making sure of safety for you ',
        image: require('../../images/adel.jpg'),
        backgroundColor: '#59b2ab',
      },
    {
        index: 2,
        title: 'فكك من عيالك احنا هنروق عليهم',
        text: 'Simple description for the second step.',
        image: require('../../images/adel.jpg'),

        backgroundColor: '#febe29',
    },
    {
        index: 3,
        title: 'لا داعي من وداعي',
        text: 'سامحيني في اندفاعي',
        image: require('../../images/adel.jpg'),
        backgroundColor: '#00be29',
    },
    {
        index: 4,
        title: 'الان مع الحارث اصبحت الحياه اجمل',
        text: 'Here you can open a custom link.',
        link: 'https://devss.netlify.app/',
        image: require('../../images/adel.jpg'),
        backgroundColor: '#88be29',
    },
];

const renderNextButton = () => {
    return (
      <View  >
        <Text  >Next</Text>
      </View>
    );
  };
  
  const renderDoneButton = () => {
    return (
      <View  >
        <Text  >Done</Text>
      </View>
    );
  };
  
  const renderSkipButton = () => {
    return (
      <View>
        <Text >Skip</Text>
      </View>
    );
  };

const IntroSlider = () => {
    return(
        <SliderIntro
        // renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        navContainerMaxSizePercent={0.3}
        navigationBarHeight={150}
        // columnButtonStyle={true}
        data={slides}
      />    ) 
};
export default IntroSlider;
