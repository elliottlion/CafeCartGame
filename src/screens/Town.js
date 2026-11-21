//town screen uses movement.js and navigation to the other places, will also show the character
import {Text, View, StyleSheet} from 'react-native';

const Town = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}> Town Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2d0c',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default Town;