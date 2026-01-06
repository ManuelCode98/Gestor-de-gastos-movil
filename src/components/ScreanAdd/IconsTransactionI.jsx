import { View, Text, Pressable } from 'react-native';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import { IconsTransactionIStyle } from '../../styles/IconsTransactionI';
import { useState } from 'react';
import { useIconStore } from '../../store/useIconStore';

const { containerIcons, containerIcon, backgroundIcon, backgroundIconSelect, text } = IconsTransactionIStyle

  

const IconsTransaction = () => {

  const { selectedIcon, setSelectedIcon } = useIconStore();


  return (
    <View style={containerIcons}>

      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'cash-outline', categoryName: 'Salario'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'cash-outline' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="cash-outline" size={28} color="#fff" />
        </View>
        <Text style={text}>Salario</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'gift-outline', categoryName: 'Regalo'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'gift-outline' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="gift-outline" size={28} color="#fff" />
        </View>
        <Text style={text}>Regalo</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'trending-up', categoryName: 'Interés'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'trending-up' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="trending-up" size={28} color="#fff" />
        </View>
        <Text style={text}>Interés</Text>
      </Pressable>


      <Pressable
        style={containerIcon}
        onPress={() => setSelectedIcon({icon: 'wallet-outline', categoryName: 'Ahorro'})}
      >
        <View
          style={[
            backgroundIcon,
            selectedIcon.icon === 'wallet-outline' && backgroundIconSelect,
          ]}
        >
          <Ionicons name="wallet-outline" size={28} color="#fff" />
        </View>
        <Text style={text}>Ahorro</Text>
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

export default IconsTransaction
