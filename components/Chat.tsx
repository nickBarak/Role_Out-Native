import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SocketContext} from '../store/contexts/SocketContext';
import uuid from 'uuid-random';
import {PlayerContext} from '../store/contexts/PlayerContext';

interface ChatMessage {
  id:string;
  color:string;
  text:string;
}

const Chat = () => {
  const [chatText, setChatText] = useState('');
  const [messages, setMessages]:[ChatMessage[], any] = useState([]);
  const socket:SocketIOClient.Socket = useContext(SocketContext);
  const [player] = useContext(PlayerContext);

  useEffect(() => {
    socket.on('chatMessage', (msg:ChatMessage) => {
        console.log(JSON.stringify(msg));
        setMessages((prev:ChatMessage[]) => [...prev, msg]);
      });
    return () => {
      socket.off('chatMessage');
      return;
    }
  }, [socket]);

  function submitChat() {
    const msg = chatText;
    socket && socket.emit('chatMessage', msg);
    setChatText('');
  }

  return (
    <View>
      <View style={styles.messages}>
        {messages.map(({color, text}) => (
          <View key={uuid()} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{...styles.playerColor, color}}>{color && (color[0].toUpperCase() + color.slice(1))}{' '}</Text>
            <Text style={styles.message}>
              {text}
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
