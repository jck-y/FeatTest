/* eslint-disable prettier/prettier */
import {Home ,Jacky ,Will} from '../pages';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jacky"
        component={Jacky}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Will"
        component={Will}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
  );
};

export default index;
