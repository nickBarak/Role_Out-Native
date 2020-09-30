import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SocketContext} from '../store/contexts/SocketContext';
import uuid from 'uuid-random';
import {PlayerContext} from '../store/contexts/PlayerContext';

const Chat = () => {
  const [chatText, setChatText] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);
  const [player] = useContext(PlayerContext);

  useEffect(() => {
    socket &&
      socket.on('chatMessage', (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
    return () => socket.off('chatMessage');
  }, [socket]);

  function submitChat() {
    const msg = chatText;
    socket.emit('chatMessage', msg);
    setChatText('');
  }

  return (
    <View>
      <View style={styles.messages}>
        {messages.map((msg) => (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.playerColor}>{player.color}</Text>
            <Text key={uuid()} style={styles.message}>
              {' '}
              {msg}
            </Text>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.chatInput}
        autoCorrect={false}
        onSubmitEditing={submitChat}
        onChangeText={(msg) => setChatText(msg)}
        placeholder="Enter a chat"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Chat,
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
    color: player.color,
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
