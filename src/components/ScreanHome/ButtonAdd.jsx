import { View, Text, Pressable, } from "react-native";
import { styleButtonAdd } from "../../styles/ButtonAdd";


const { container, text } = styleButtonAdd;

const ButtonAdd = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('Add')
    };

  return (
    <Pressable 
        onPress={ handlePress }
        style={({pressed})=>({ opacity: pressed ? 0.5 : 1 })}
        >
        <View style={container}>
            <Text 
            style={text}>+</Text>
        </View>
    </Pressable>
    
  )
}

export default ButtonAdd
