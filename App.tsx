import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFavoriteColorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My
        {'\n'}favourite
        {'\n'}colour
        {'\n'}is
        {'\n'}<Text style={styles.boldText}>WHITE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Black background to match the screen
  },
  text: {
    color:'#FFFFFF', // Purple color
    fontSize: 48,
    textAlign: 'center',
  },
  boldText: {
    color: '#FFFFFF', // Purple color
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default MyFavoriteColorScreen;
