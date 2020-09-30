import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './components/Home';
import Room from './components/Room';
import Help from './components/Help';
import Mode from './components/Mode';
import {ScreenContext} from './store/contexts/ScreenContext';

const App = () => {
  const [screen] = useContext(ScreenContext);
  const [hosting, setHosting] = useState(false);

  return (
    <View style={styles.App}>
      {(() => {
        switch (screen) {
          case 'Home':
            return <Home setHosting={setHosting} />;
          case 'Room':
            return <Room />;
          case 'Help':
            return <Help />;
          case 'Mode':
            return <Mode hosting={hosting} />;
          default:
            return <Home setHosting={setHosting} />;
        }
      })()}
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#5cd5d5ff',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
