// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import News from '../screens/News';
// import SavedNews from '../screens/SavedNews';
// import Home from '../screens/Home';



// const HomeScreen = () => {
//   return(
//   <View>
//     <Text>HOME SCREEN</Text>
//   </View>
//   )
// }

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="SavedNews" component={SavedNews} />
//         {/* <Stack.Screen name="news" component={News} /> */}
//         {/* <Stack.Screen name="News2" component={News2} /> */}


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export {MyTabs ,AppNavigation};

import * as React from 'react';
import Home from '../screens/Home';
import SavedNews from  '../screens/SavedNews'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home';
            } 
            
            else if (route.name === 'Saved News') {
              iconName = focused ? 'bookmark-sharp' : 'bookmark-sharp';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Saved News" component={SavedNews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}