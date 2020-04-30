import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Home from './src/Home';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

const Blank = () => {
  return <View />;
};

export default function App() {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Explore') {
        iconName = 'home';
      } else if (route.name === 'Watchlist') {
        iconName = 'heart';
      } else if (route.name === 'Detais') {
        iconName = 'price-tag';
      } else if (route.name === 'Notification') {
        iconName = 'bell';
      }

      // You can return any component that you like here!
      return <Entypo name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#FB7200',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Watchlist" component={Blank} />
        <Tab.Screen name="Detais" component={Blank} />
        <Tab.Screen name="Notification" component={Blank} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
