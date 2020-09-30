import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import uuid from 'uuid-random';

const RoleHeader = ({roles}) => {
  return (
    <View style={styles.RoleHeader}>
      <Text>Active Roles</Text>
      <View style={styles.roles}>
        {roles.map(role => <Text key={uuid()} style={styles.role}>{role}</Text>)}
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
});

export default RoleHeader;
