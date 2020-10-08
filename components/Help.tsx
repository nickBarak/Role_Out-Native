import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext.js';
import Styles from '../Styles.js';

const helpPages = [
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. lasdljfasjdflsadf. ',
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. lasdljfasjdflsadf. A;aksdfjksdlf. aojwjfl.sad fowajeofjaldf.',
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. ',
]

const Help = () => {
  const [, setScreen] = useContext(ScreenContext);
  const [phase, setPhase] = useState(0);

  return (
    <View style={styles.Help}>
      <Text style={styles.logo}>Role Out!</Text>
      <Text style={{fontWeight: 'bold'}}>How to Play</Text>
      <Text style={styles.textMain}>{helpPages[phase]}</Text>
      <TouchableOpacity onPress={() => phase < 2 ? setPhase(phase + 1) : setScreen('Home')}>
        <Text style={styles.btn}>{phase < 2 ? 'Next' : 'Return'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Help: {
    ...Styles.container,
    backgroundColor: 'white',
    height: 'auto',
    width: '70%',
    padding: 5,
  },
  btn: {
    ...Styles.btn,
    backgroundColor: Styles.clrDark,
    color: 'white',
    margin: 10,
  },
  logo: {
    ...Styles.logo,
    color: Styles.clrLight,
    margin: 10,
  },
  textMain: {
    textAlign: 'center',
    lineHeight: 19,
    paddingHorizontal: 20,
    paddingVertical: 5,
  }
});

export default Help;
