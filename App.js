import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { useAuthStore } from './src/store/useAuthStore';

export default function App() {
  const listenAuth = useAuthStore((state) => state.listenAuth);

  useEffect(() => {
    const unsubscribe = listenAuth();
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
