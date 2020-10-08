import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import uuid from 'uuid-random';

const RoleHeader = ({roles, playerRole}) => {
  return (
    <View style={styles.RoleHeader}>
      <Text>Active Roles</Text>
      <View style={styles.roles}>
        {roles.map(role => <Text key={uuid()} style={styles.role}>{role}</Text>)}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Your Role: </Text>
        <Text style={styles.playerRole}>{playerRole}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RoleHeader: {
    alignItems: 'center',
  },
  roles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  role: {

  },
  playerRole: {
    fontWeight: 'bold',
  }
});

export default RoleHeader;
