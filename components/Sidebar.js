var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContext } from '../store/contexts/ScreenContext';
import { v4 as uuid } from 'uuid';
import { SocketContext } from '../store/contexts/SocketContext';
import { PlayerContext } from '../store/contexts/PlayerContext';
var Sidebar = function (_a) {
    var players = _a.players;
    var socket = useContext(SocketContext);
    var _b = useContext(ScreenContext), setScreen = _b[1];
    var _c = useContext(PlayerContext), player = _c[0], setPlayer = _c[1];
    players = [
        players.find(function (_a) {
            var id = _a.id;
            return id === player.id || {};
        }),
        players.filter(function (_a) {
            var id = _a.id;
            return id === player.id;
        })
    ];
    console.log(JSON.stringify(players));
    return (<View style={styles.Sidebar}>
      <Text onPress={function () {
        setScreen('Home');
        setPlayer({ room: {}, color: null, id: player.id });
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
      
        {[
        players.find(function (_a) {
            var id = _a.id;
            return id === (player && player.id);
        }) || {},
        players.filter(function (_a) {
            var id = _a.id;
            return id === (player && player.id);
        })
    ].map(function (_a, i) {
        var color = _a.color, role = _a.role;
        return (<View key={uuid()} style={styles.player}>
            <Text style={{
            color: !i ? undefined : color,
            textDecorationLine: role ? 'line-through' : 'none',
        }}>
              {!i
            ? 'You'
            : color && (color[0].toUpperCase() +
                color.slice(1, color.length))}
            </Text>
            <Text>{!i && ' ('}</Text>
            <Text style={__assign(__assign({}, styles.role), { color: !i ? color : undefined })}>{!i ? "" + (color && (color[0].toUpperCase() + color.slice(1))) : " = " + (role || '??')}</Text>
            <Text>{!i && ')'}</Text>
          </View>);
    })}
      </View>
    </View>);
};
var styles = StyleSheet.create({
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
