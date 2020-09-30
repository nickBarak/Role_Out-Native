import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext';
import uuid from 'uuid-random';
import {SocketContext} from '../store/contexts/SocketContext';
import {PlayerContext} from '../store/contexts/PlayerContext';

const Sidebar = ({players}) => {
  const socket = useContext(SocketContext);
  const [, setScreen] = useContext(ScreenContext);
  const [player, setPlayer] = useContext(PlayerContext);

  return (
    <View style={styles.Sidebar}>
      <Text onTouchStart={() => {
        setScreen('Home');
        setPlayer({room: null, color: null});
        socket.emit('leaveRoom');
      }}>Back Home</Text>
      <Text>Mode:</Text>
      <View style={styles.list}>
        <Text key={uuid()}>{!Number(player.room[0]) ? 'Turn-Based' : 'Open-Discussion'}</Text>
        <Text key={uuid()}>{!Number(player.room[1]) ? 'Vote During' : 'Vote After'}</Text>
        <Text key={uuid()}>{!Number(player.room[2]) ? 'Random Roles' : 'Choose Roles'}</Text>
      </View>
      <Text>Players:</Text>
      <View style={styles.list}>
        {players.map(({color, role}) => (
          <View key={uuid()} style={styles.player}>
            <Text
              style={{
                color: color,
                textDecorationLine: role ? 'line-through' : 'none',
              }}>
              {color[0].toUpperCase() +
                color.slice(1, color.length)}
            </Text>
            <Text style={styles.role}> = {role || '??'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Sidebar,
  list: {
    marginLeft: 5,
  },
  player: {
    flexDirection: 'row',
  },
  color: {},
  role: {},
});

export default Sidebar;
