//if we get here we can make ingredients like buns, soups, and sauces for cheap
import {Text, View, StyleSheet} from 'react-native';

const Kitchen = (navigation) => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}> Kitchen Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#155717',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default Kitchen;