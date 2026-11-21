//grocery store
//has list of items and price
import {Text, View, StyleSheet} from 'react-native';

const Grocery = (navigation) => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}> Grocery Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40057b',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default Grocery;