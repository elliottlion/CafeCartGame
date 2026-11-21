//the cart screen
import {Text, View, StyleSheet} from 'react-native';

const Cart = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}> Cart Screen</Text>;
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efba73',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20 ,
  },

   text: {
    fontFamily: 'Arial',
    fontSize: 20 ,
  }
});

export default Cart;