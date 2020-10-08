import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScreenContext} from '../store/contexts/ScreenContext';
import uuid from 'uuid-random';
import {SocketContext} from '../store/contexts/SocketContext';
import {PlayerContext} from '../store/contexts/PlayerContext';

const Sidebar = ({players}) => {
  const socket:SocketIOClient.Socket = useContext(SocketContext);
  const [, setScreen] = useContext(ScreenContext);
  const [player, setPlayer] = useContext(PlayerContext);

  players = [
    players.find(({id}) => id === player.id || {}),
    players.filter(({id}) => id === player.id)
  ];

  console.log(JSON.stringify(players));

  return (
    <View style={styles.Sidebar}>
      <Text onPress={() => {
        setScreen('Home');
        setPlayer({room: {}, color: null, id: player.id});
        socket && socket.emit('leaveRoom');
      }}>Back Home</Text>
      <Text>Mode:</Text>
      <View style={styles.list}>
        <Text key={uuid()}>{(player.room && player.room.name && !Number(player.room.name[0])) ? 'Turn-Based' : 'Open-Discussion'}</Text>
        <Text key={uuid()}>{(player.room && player.room.name && !Number(player.room.name[1])) ? 'Vote During' : 'Vote After'}</Text>
        <Text key={uuid()}>{(player.room && player.room.name && !Number(player.room.name[2])) ? 'Random Roles' : 'Choose Roles'}</Text>
      </View>
      <Text>Players:</Text>
      <View style={styles.list}>
      {/* Zero index is player */}
        {[
          players.find(({id}) => id === (player && player.id)) || {},
          players.filter(({id}) => id === (player && player.id))
        ].map(({color, role}:{color:string, role:string}, i) => (
          <View key={uuid()} style={styles.player}>
            <Text
              style={{
                color: !i ? undefined : color,
                textDecorationLine: role ? 'line-through' : 'none',
              }}>
              {!i
                ? 'You'
                : color && (color[0].toUpperCase() +
                color.slice(1, color.length))}
            </Text>
            <Text>{!i && ' ('}</Text>
            <Text style={{...styles.role, color: !i ? color : undefined}}>{!i ? `${color && (color[0].toUpperCase() + color.slice(1))}` : ` = ${role || '??'}`}</Text>
            <Text>{!i && ')'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Sidebar: {},
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
