//home!
//handles day progression and initial navigation
//where i wanna start after character creation unless we can make some cool initial screens that tell you how to play the game
import { View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Button title="Town" onPress={() => navigation.navigate('Town')} />
      <Button title="Park" onPress={() => navigation.navigate('Park')} />
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      <Button title="Grocery" onPress={() => navigation.navigate('Grocery')} />
      <Button title="Kitchen" onPress={() => navigation.navigate('Kitchen')} />
      <Button title="Start Screen" onPress={() => navigation.navigate('StartScreen')} />
    </View>
  );
}