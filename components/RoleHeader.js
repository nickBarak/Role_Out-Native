import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { v4 as uuid } from 'uuid';
var RoleHeader = function (_a) {
    var roles = _a.roles, playerRole = _a.playerRole;
    return (<View style={styles.RoleHeader}>
      <Text>Active Roles</Text>
      <View style={styles.roles}>
        {roles.map(function (role) { return <Text key={uuid()} style={styles.role}>{role}</Text>; })}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Your Role: </Text>
        <Text style={styles.playerRole}>{playerRole}</Text>
      </View>
    </View>);
};
var styles = StyleSheet.create({
    RoleHeader: {
        alignItems: 'center',
    },
    roles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    role: {},
    playerRole: {
        fontWeight: 'bold',
    }
});
export default RoleHeader;
