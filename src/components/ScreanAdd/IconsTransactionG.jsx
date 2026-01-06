import { View, Text, Pressable } from 'react-native';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import { IconsTransactionGStyle } from '../../styles/IconsTransactionG';
import { useIconStore } from '../../store/useIconStore';

const { containerIcons, containerIcon, backgroundIcon, backgroundIconSelect, text } = IconsTransactionGStyle

const IconsTransactionG = () => {

  const { selectedIcon, setSelectedIcon } = useIconStore();

  return (
    <View style={containerIcons}>

      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'bag-add', categoryName: 'Salud'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'bag-add' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="bag-add" size={28} color="#fff" />
        </View>
        <Text style={text}>Salud</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'barbell', categoryName: 'Deporte'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'barbell' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="barbell" size={28} color="#fff" />
        </View>
        <Text style={text}>Deporte</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'bus', categoryName: 'Transporte'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'bus' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="bus" size={28} color="#fff" />
        </View>
        <Text style={text}>Transporte</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'card', categoryName: 'Ocio'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'card' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="card" size={28} color="#fff" />
        </View>
        <Text style={text}>Ocio</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'cart', categoryName: 'Mercado'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'cart' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="cart" size={28} color="#fff" />
        </View>
        <Text style={text}>Mercado</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'game-controller', categoryName: 'Entretenimiento'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'game-controller' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="game-controller" size={28} color="#fff" />
        </View>
        <Text style={text}>Entretenimiento</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'home', categoryName: 'Alquiler'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'home' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="home" size={28} color="#fff" />
        </View>
        <Text style={text}>Alquiler</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'planet', categoryName: 'Otro'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'planet' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="planet" size={28} color="#fff" />
        </View>
        <Text style={text}>Otro</Text>
      </Pressable>

    </View>
  );
}

export default IconsTransactionG
