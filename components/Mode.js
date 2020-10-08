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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScreenContext } from '../store/contexts/ScreenContext';
import { SocketContext } from '../store/contexts/SocketContext';
import { PlayerContext } from '../store/contexts/PlayerContext';
import Styles from '../Styles';
import { v4 as uuid } from 'uuid';
import { RoomContext } from '../store/contexts/RoomContext';
var options = [
    ['Turn-Based', 'Open-Discussion'],
    ['Vote During', 'Vote After'],
    ['Random Roles', 'Choose Roles'],
];
var Mode = function (_a) {
    var hosting = _a.hosting;
    var socket = useContext(SocketContext);
    var _b = useContext(PlayerContext), setPlayer = _b[1];
    var _c = useContext(ScreenContext), setScreen = _c[1];
    var _d = useContext(RoomContext), setRoom = _d[1];
    var _e = useState([0, 0, 0]), config = _e[0], setConfig = _e[1];
    socket && socket.on('errorMessage', function (msg) {
        return Alert.alert('Sorry!', msg, [
            { text: 'Change Mode' },
            { text: 'Host Your Own', onPress: function () { return enterRoom(true); } },
        ]);
    });
    socket && socket.on('joinedRoom', function (_a) {
        var player = _a.player, room = _a.room;
        setPlayer(player);
        setScreen('Room');
        setRoom(room);
    });
    function enterRoom(hosting) {
        if (hosting === void 0) { hosting = false; }
        socket && socket.emit(hosting ? 'hostRoom' : 'joinRoom', config);
    }
    function updateConfig(index, value) {
        var newConfig = __spreadArrays(config);
        newConfig.splice(index, 1, value);
        setConfig(newConfig);
    }
    return (<View style={styles.Mode}>
      <Text style={styles.logo}>Role Out!</Text>
      <Text style={{ fontWeight: 'bold', color: 'white' }}>
        How do you want to play?
      </Text>

      <View style={styles.options}>
        {options.map(function (_a, i) {
        var opt1 = _a[0], opt2 = _a[1];
        return (<View key={uuid()} style={styles.optionSet}>
            <Text key={uuid()} onPress={function () { return updateConfig(i, 0); }} style={__assign(__assign({}, styles.option), { color: config[i] ? 'white' : Styles.clrLight, fontWeight: config[i] ? 'normal' : 'bold' })}>
              {opt1}
            </Text>
            <Text key={uuid()} onPress={function () { return updateConfig(i, 1); }} style={__assign(__assign({}, styles.option), { color: !config[i] ? 'white' : Styles.clrLight, fontWeight: !config[i] ? 'normal' : 'bold' })}>
              {opt2}
            </Text>
          </View>);
    })}
      </View>

      <View style={styles.btns}>
        <TouchableOpacity key={'btn-cancel'} onPress={function () { return setScreen('Home'); }}>
          <Text style={styles.btn}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity key={'btn-continue'} onPress={function () { return enterRoom(hosting); }}>
          <Text style={styles.btn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>);
};
var styles = StyleSheet.create({
    Mode: __assign(__assign({}, Styles.container), { backgroundColor: Styles.clrDark, color: 'white' }),
    logo: __assign({}, Styles.logo),
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
    btn: __assign(__assign({}, Styles.btn), { backgroundColor: Styles.clrLight, color: 'white', margin: 10 }),
});
export default Mode;
