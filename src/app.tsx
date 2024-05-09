import { registerRootComponent } from 'expo';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home/Home';
import { TradeScreen } from './screens/Trade';
import { StyleProvider } from './styling';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }
  return (
    <StyleProvider>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Trade' component={TradeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}

registerRootComponent(App);
