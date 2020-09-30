import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext';
import {SocketContext} from '../store/contexts/SocketContext';
import {PlayerContext} from '../store/contexts/PlayerContext';
import Styles from '../Styles';
import uuid from 'uuid-random';

const options = [
  ['Turn-Based', 'Open-Discussion'],
  ['Vote During', 'Vote After'],
  ['Random Roles', 'Choose Roles'],
];

const Mode = ({hosting}) => {
  const socket = useContext(SocketContext);
  const [, setPlayer] = useContext(PlayerContext);
  const [, setScreen] = useContext(ScreenContext);
  const [config, setConfig] = useState([0, 0, 0]);

  socket.on('errorMessage', (msg) =>
    Alert.alert('Sorry!', msg, [
      {text: 'Change Mode'},
      {text: 'Host Your Own', onPress: () => enterRoom(true)},
    ]),
  );

  socket.on('joinedRoom', player => {
    setPlayer(player);
    setScreen('Room');
  });

  function enterRoom(hosting=false) {
    socket.emit(hosting ? 'hostRoom' : 'joinRoom', config);
  }

  function updateConfig(index, value) {
    let newConfig = [...config];
    newConfig.splice(index, 1, value);
    setConfig(newConfig);
  }

  return (
    <View style={styles.Mode}>
      <Text style={styles.logo}>Role Out!</Text>
      <Text style={{fontWeight: 'bold', color: 'white'}}>
        How do you want to play?
      </Text>

      <View style={styles.options}>
        {options.map(([opt1, opt2], i) => (
          <View key={uuid()} style={styles.optionSet}>
            <Text
              key={uuid()}
              onTouchStart={() => updateConfig(i, 0)}
              style={{
                ...styles.option,
                color: config[i] ? 'white' : Styles.clrLight,
                fontWeight: config[i] ? 'normal' : 'bold',
              }}>
              {opt1}
            </Text>
            <Text
              key={uuid()}
              onTouchStart={() => updateConfig(i, 1)}
              style={{
                ...styles.option,
                color: !config[i] ? 'white' : Styles.clrLight,
                fontWeight: !config[i] ? 'normal' : 'bold',
              }}>
              {opt2}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.btns}>
        <TouchableOpacity key={'btn-cancel'} onPress={() => setScreen('Home')}>
          <Text style={styles.btn}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={'btn-continue'}
          onPress={() => enterRoom(hosting)}>
          <Text style={styles.btn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Mode: {
    ...Styles.container,
    backgroundColor: Styles.clrDark,
    color: 'white',
  },
  logo: {
    ...Styles.logo,
  },
  options: {},
  optionSet: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    color: 'white',
    paddingHorizontal: 3,
  },
  btns: {
    flexDirection: 'row',
  },
  btn: {
    ...Styles.btn,
    backgroundColor: Styles.clrLight,
    color: 'white',
    margin: 10,
  },
});

export default Mode;
