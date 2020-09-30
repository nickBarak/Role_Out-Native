import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext.js';
import {SocketContext} from '../store/contexts/SocketContext.js';
import Styles from '../Styles.js';

const Home = ({setHosting}) => {
  const [, setScreen] = useContext(ScreenContext);
  const socket = useContext(SocketContext);

  function enterRoom(hosting=false) {
    setHosting(hosting);
    setScreen('Mode');
  }

  return (
    <View style={styles.Home}>
      <Text style={Styles.logo}>Role Out!</Text>
      <View>
        <TouchableOpacity onPress={() => enterRoom()}>
          <Text style={Styles.btn}>Join Room</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => enterRoom(true)}>
          <Text style={Styles.btn}>Host Room</Text>
        </TouchableOpacity>
        <Text onTouchStart={() => setScreen('Help')} style={styles.help}>
          How to Play
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    ...Styles.container,
  },
  help: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Home;
