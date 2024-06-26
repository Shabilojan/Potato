// Menu.js

import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/BG-04.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Potato Disease Prediction App</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Main', { action: 'gallery' })}>
            <Image source={require('../img/4.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Main', { action: 'camera' })}>
            <Image source={require('../img/5.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Tips')}>
            <Image source={require('../img/6.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Tips</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: 200, 
    justifyContent: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menuText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
