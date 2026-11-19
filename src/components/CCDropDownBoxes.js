import { Text, StyleSheet, View, Image, Pressable, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState} from 'react';

//Reuseable component for Character Customization Dropdown Boxes
const DropdownBox = (props) => {
    const [isDown, setIsDown] = useState(false)

    //Placeholder number, adjust as needed
    const initialAmount = 4;

    //If button is pressed then display the full array if not slice the array if needed
    const visibleItems = isDown ? props.itemarray : props.itemarray.slice(0, initialAmount);

    return(
        <>
        <View style={[styles.container, styles.border]}>

            <View style={[styles.container, {flexDirection: 'column'}]}>
                <Text style={styles.text}>{props.title}</Text>

                {props.itemarray.length > initialAmount && (
                    <View style={styles.arrow}>
                        <Pressable onPress={() => setIsDown(!isDown)}>
                            <AntDesign name={ isDown ? "arrow-right" : "arrow-down"} size={30}/>
                        </Pressable>
                    </View>
                )}

            </View>
                <FlatList data ={visibleItems} numColumns={initialAmount} keyExtractor={(item, index) => item.name || index.toString()}
                    renderItem={({item}) => (
                        <Pressable style={({pressed}) => pressed && styles.buttonPressed} onPress={() => props.onSelect(props.title ==="Skin Tone" ? item.name : item)}>
                            <Image source={item.source} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                    )}/>
            <View>
                
            </View>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: 10,

    },
    text: {
        fontSize: 40,
        width: "60%"
    },
    buttonPressed: {
        opacity: 0.2,
    },
    arrow: {
        width: "100%",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
    image: {
        width: 50,
        height: 75
    },
    border: {
        borderWidth: 3, 
        borderColor: 'black', 
        borderRadius: 10,
        padding: 10,
    }

});

export default DropdownBox;