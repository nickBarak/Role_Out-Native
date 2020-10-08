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
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenContext } from '../store/contexts/ScreenContext.js';
import Styles from '../Styles.js';
var helpPages = [
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. lasdljfasjdflsadf. ',
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. lasdljfasjdflsadf. A;aksdfjksdlf. aojwjfl.sad fowajeofjaldf.',
    'Lorem ipsum dolor sit amet alskdfjsaldkfasd asdlfkja sadf asdf laldsajf. asdfas laslalsdfjlasdflsadf. ',
];
var Help = function () {
    var _a = useContext(ScreenContext), setScreen = _a[1];
    var _b = useState(0), phase = _b[0], setPhase = _b[1];
    return (<View style={styles.Help}>
      <Text style={styles.logo}>Role Out!</Text>
      <Text style={{ fontWeight: 'bold' }}>How to Play</Text>
      <Text style={styles.textMain}>{helpPages[phase]}</Text>
      <TouchableOpacity onPress={function () { return phase < 2 ? setPhase(phase + 1) : setScreen('Home'); }}>
        <Text style={styles.btn}>{phase < 2 ? 'Next' : 'Return'}</Text>
      </TouchableOpacity>
    </View>);
};
var styles = StyleSheet.create({
    Help: __assign(__assign({}, Styles.container), { backgroundColor: 'white', height: 'auto', width: '70%', padding: 5 }),
    btn: __assign(__assign({}, Styles.btn), { backgroundColor: Styles.clrDark, color: 'white', margin: 10 }),
    logo: __assign(__assign({}, Styles.logo), { color: Styles.clrLight, margin: 10 }),
    textMain: {
        textAlign: 'center',
        lineHeight: 19,
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
});
export default Help;
