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
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenContext } from '../store/contexts/ScreenContext.js';
import { SocketContext } from '../store/contexts/SocketContext.js';
import Styles from '../Styles.js';
var Home = function (_a) {
    var setHosting = _a.setHosting;
    var _b = useContext(ScreenContext), setScreen = _b[1];
    var socket = useContext(SocketContext);
    function enterRoom(hosting) {
        if (hosting === void 0) { hosting = false; }
        setHosting(hosting);
        setScreen('Mode');
    }
    return (<View style={styles.Home}>
      <Text style={Styles.logo}>Role Out!</Text>
      <View>
        <TouchableOpacity onPress={function () { return enterRoom(); }}>
          <Text style={Styles.btn}>Join Room</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={function () { return enterRoom(true); }}>
          <Text style={Styles.btn}>Host Room</Text>
        </TouchableOpacity>
        <Text onPress={function () { return setScreen('Help'); }} style={styles.help}>
          How to Play
        </Text>
      </View>
    </View>);
};
var styles = StyleSheet.create({
    Home: __assign({}, Styles.container),
    help: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
    },
});
export default Home;
