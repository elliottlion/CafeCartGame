//a simple login and start game
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import DropdownBox from '../components/CCDropDownBoxes';


const Play_Menu = "StartScreen";
const Character_Creation_Menu = "CharacterCreation";

//Placeholder assets from https://drawdojo.com/templates/character-design-template/?utm_source=chatgpt.com
const bodyTypeOptions = [
    {name: "Male", source: require("../../assets/BodyTypes/male_front_centered_blue_transparent.png"), mask: require("../../assets/BodyTypes/male_skin_mask.png")},
    {name: "Female", source: require("../../assets/BodyTypes/female_front_centered_blue_transparent.png"), mask: require("../../assets/BodyTypes/female_skin_mask.png")},

]

//Can replace these as well
const skinToneOptions = [
    {name: "#F6D7C3", source: require("../../assets/SkinTones/skin_tone_very_light_F6D7C3.png")},
    {name: "#EBC09F", source: require("../../assets/SkinTones/skin_tone_light_EBC09F.png")},
    {name: "#D9A27C", source: require("../../assets/SkinTones/skin_tone_light_medium_D9A27C.png")},
    {name: "#C4875F", source: require("../../assets/SkinTones/skin_tone_medium_C4875F.png")},
    {name: "#A96F4F", source: require("../../assets/SkinTones/skin_tone_medium_tan_A96F4F.png")},
    {name: "#85563E", source: require("../../assets/SkinTones/skin_tone_tan_85563E.png")},
    {name: "#603F2E", source: require("../../assets/SkinTones/skin_tone_deep_603F2E.png")},
    {name: "#3D2922", source: require("../../assets/SkinTones/skin_tone_very_deep_3D2922.png")},
]

const customizationOptions = [
    {id: "bodyType", title: "Body Type", items: bodyTypeOptions},
    {id: "skinTone", title: "Skin Tone", items: skinToneOptions},
    //Two duplicates to test FlatList can replace later with the other options
    //{id: "skinTone", title: "Skin Tone", items: skinToneOptions},
    //{id: "skinTone", title: "Skin Tone", items: skinToneOptions}
]


//Screen will contain both the PlayMenu and CharacterCreation in order to allow player to go back to the PlayMenu without messing
//Stack Navigation adding the CharacterCreation to the stack. 
const StartScreen = () => {

    //State manager for gameState
    const [gameState, setGameState] = useState(Play_Menu);

    //Keep track of the selected appearance options
    const [character, setCharacter] = useState({
        bodyType: null,
        skinTone: "#F6D7C3",
        hairStyle: null,
        eyeShape: null,
        mouth: null,
        nose: null,
    });

    //Change the currently selected appearance
    const onSelect = (category, item) => {
        setCharacter(prev => ({...prev, [category]: item}));
    };

    var whatToDisplay;

    //Check which state the game is in and display whats appropriate
    switch(gameState){

        case(Play_Menu):
            //Currently displays just a basic text and button to go to next screen for now as placeholder
            //Needs the cart image in the background when made and then safeareacontext for the button probably
            whatToDisplay = <>
            <View style ={styles.container}>

                <Text style ={styles.text}>Insert Cafe Cart</Text>

                <Pressable onPress={() => setGameState(Character_Creation_Menu)}>
                    <Text style={styles.playButton}>Start Game!</Text>
                </Pressable>

            </View>
            </>
            break;

        case(Character_Creation_Menu):
        //Background color probably needs to be changed as well but this section displays the top half as the customization options and then the bottom as a preview
            whatToDisplay = <>

            <View style ={[styles.background, {backgroundColor: 'white'}]}>

                <View style={styles.customizationSection}>
                    <FlatList data={customizationOptions} keyExtractor={(item) => item.id} renderItem={({item}) => (
                        <DropdownBox title={item.title} itemarray={item.items} onSelect={(selectedItem) => onSelect(item.id, selectedItem)}/>
                        )
                    }/>
                </View>

                <View style={styles.displaySection}>
                    {character.bodyType && (
                        <View style={styles.characterPreview}>
                            <Image source={character.bodyType.mask} style={[styles.characterImage, {tintColor: character.skinTone}]} resizeMode='contain'/>
                            <Image source={character.bodyType.source} style={[styles.characterImage, {zIndex: 1}]} resizeMode='contain'/>                            
                        </View>

                    )}
                </View>


            </View>

            </>
            break;
    }
    
    return whatToDisplay;

}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //Change when theres an actual image avaliable instead of text
    justifyContent: 'space-between',
    backgroundColor: '#FDBA90',
  },
  playButton:{
    borderWidth: 5,
    borderColor: '#D28A8C',
    backgroundColor: 'EEBEC6',
    fontSize: 40,
  },
  text: {
    fontSize: 40
  },
  background: {
    flex: 1,
    backgroundColor: '#FDBA90',
  },
  customizationSection: {
    flex: 1,
    alignItems: 'center'
  },
  displaySection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3, 
    borderColor: "#D28A8C"
  },
  characterImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  characterPreview: {
    width:250,
    height:400,
    position: 'relative'
  },

});
