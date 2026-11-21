//park screen, cart will be here 
import {Text, View, StyleSheet} from 'react-native';

const Park = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Park Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5a3d3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default Park;