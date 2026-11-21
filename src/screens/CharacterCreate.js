//character creation, right now just asthetics and name
//Combined with StartScreen.js by Hieu but can change to two seperate files if needed

import {Text, View, StyleSheet} from 'react-native';

const CharacterCreate = (navigation) => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}> CharacterCreate Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3dda9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default CharacterCreate;