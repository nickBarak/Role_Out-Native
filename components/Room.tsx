import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext';
import {SocketContext} from '../store/contexts/SocketContext';
import Sidebar from './Sidebar';
import RoleHeader from './RoleHeader';
import Chat from './Chat';
import {PlayerContext} from '../store/contexts/PlayerContext';
import {RoomContext} from '../store/contexts/RoomContext';

const Room = () => {
  const socket = useContext(SocketContext);
  const [players, setPlayers] = useState([]);
  const [roles, setRoles] = useState(['Farmer', 'Doctor']);
  const [player] = useContext(PlayerContext);
  const [room] = useContext(RoomContext);
  
  useEffect(() => {
    console.log(room);
    setPlayers(room.players.map(({id, color}) => ({ id, color, role: '' })))
  }, [room]);

  return (
    <View style={styles.Room}>
      <RoleHeader roles={roles} playerRole={'Farmer'} />
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
