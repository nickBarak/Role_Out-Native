import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SocketContext } from '../store/contexts/SocketContext';
import Sidebar from './Sidebar';
import RoleHeader from './RoleHeader';
import Chat from './Chat';
import { PlayerContext } from '../store/contexts/PlayerContext';
import { RoomContext } from '../store/contexts/RoomContext';
var Room = function () {
    var socket = useContext(SocketContext);
    var _a = useState([]), players = _a[0], setPlayers = _a[1];
    var _b = useState(['Farmer', 'Doctor']), roles = _b[0], setRoles = _b[1];
    var player = useContext(PlayerContext)[0];
    var room = useContext(RoomContext)[0];
    useEffect(function () {
        console.log(room);
        setPlayers(room.players.map(function (_a) {
            var id = _a.id, color = _a.color;
            return ({ id: id, color: color, role: '' });
        }));
    }, [room]);
    return (<View style={styles.Room}>
      <RoleHeader roles={roles} playerRole={'Farmer'}/>
      <View style={styles.lower}>
        <Sidebar players={players}/>
        <Chat />
      </View>
    </View>);
};
var styles = StyleSheet.create({
    Room: {},
    lower: {
        flexDirection: 'row',
    },
});
export default Room;
