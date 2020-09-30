import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext';
import {SocketContext} from '../store/contexts/SocketContext';
import Sidebar from './Sidebar';
import RoleHeader from './RoleHeader';
import Chat from './Chat';

const Room = () => {
  const socket = useContext(SocketContext);
  const [players, setPlayers] = useState([
    {color: 'red', role: null},
    {color: 'purple', role: 'Scarecrow'},
  ]);
  const [roles, setRoles] = useState(['Farmer']);

  return (
    <View style={styles.Room}>
      <RoleHeader roles={roles} />
      <View style={styles.lower}>
        <Sidebar players={players} />
        <Chat />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Room: {},
  lower: {
    flexDirection: 'row',
  },
});

export default Room;
