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
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SocketContext } from '../store/contexts/SocketContext';
import { v4 as uuid } from 'uuid';
import { PlayerContext } from '../store/contexts/PlayerContext';
var Chat = function () {
    var _a = useState(''), chatText = _a[0], setChatText = _a[1];
    var _b = useState([]), messages = _b[0], setMessages = _b[1];
    var socket = useContext(SocketContext);
    var player = useContext(PlayerContext)[0];
    useEffect(function () {
        socket.on('chatMessage', function (msg) {
            console.log(JSON.stringify(msg));
            setMessages(function (prev) { return __spreadArrays(prev, [msg]); });
        });
        return function () {
            socket.off('chatMessage');
            return;
        };
    }, [socket]);
    function submitChat() {
        var msg = chatText;
        socket && socket.emit('chatMessage', msg);
        setChatText('');
    }
    return (<View>
      <View style={styles.messages}>
        {messages.map(function (_a) {
        var color = _a.color, text = _a.text;
        return (<View key={uuid()} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={__assign(__assign({}, styles.playerColor), { color: color })}>{color && (color[0].toUpperCase() + color.slice(1))}{' '}</Text>
            <Text style={styles.message}>
              {text}
            </Text>
          </View>);
    })}
      </View>
      <TextInput style={styles.chatInput} autoCorrect={false} onSubmitEditing={submitChat} onChangeText={function (msg) { return setChatText(msg); }} placeholder="Enter a chat"/>
    </View>);
};
var styles = StyleSheet.create({
    Chat: {},
    chatInput: {
        height: 40,
        borderWidth: 2,
        backgroundColor: '#eee',
        margin: 20,
        marginBottom: 0,
        width: 150,
        padding: 10,
        borderRadius: 3,
    },
    playerColor: {
        fontWeight: 'bold',
    },
    messages: {
        margin: 20,
        width: 200,
    },
    message: {
        backgroundColor: '#e8e8ff',
        color: '#aaa',
        borderWidth: 2.5,
        padding: 8,
        marginBottom: 8,
        borderRadius: 3,
    },
});
export default Chat;
