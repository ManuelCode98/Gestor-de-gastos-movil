import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "../store/useAuthStore";

import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user, loading } = useAuthStore();

  if (loading) return null; // luego splash

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
