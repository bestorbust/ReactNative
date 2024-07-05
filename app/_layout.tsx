// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="pharmacy"/>
//     </Stack>
//   );
// }
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Home from '../components/navbar/Home';
import Homeoutline from '../components/navbar/Home-outline';
import Consultation from '../components/navbar/Consultation';
import Consultationoutline from '../components/navbar/Consultation-outline';
import Certificate from '../components/navbar/Certificate';
import Certificateoutline from '../components/navbar/Certificate-outline';
import Pharmacy from '../components/navbar/Pharmacy';
import Pharmacyoutline from '../components/navbar/Pharmacy-outline';
import Prescription from '../components/navbar/Prescription';
import Prescriptionoutline from '../components/navbar/Prescription-outline';
import { Colors } from '@/constants/Colors';


export default function RootLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#005760',
        tabBarInactiveTintColor: '#011111',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false, 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
          focused ? <Home />: <Homeoutline/>
          ),
        }}
      />
      <Tabs.Screen
        name="consultation"
        options={{
          headerShown: true, 
          title: 'Consultation',
          tabBarIcon: ({ color, focused }) => (
          focused ? <Consultation /> : <Consultationoutline/>
          ),
        }}
      />
      <Tabs.Screen
        name="certificate"
        options={{
          headerShown: true, 
          title: 'Certificate',
          tabBarIcon: ({ color, focused }) => (
          focused ? <Certificate /> : <Certificateoutline/>
          ),
        }}
      />
      <Tabs.Screen
        name="prescription"
        options={{
          headerShown: true, 
          title: 'Prescription',
          tabBarIcon: ({ color, focused }) => (
          focused ? <Prescription /> : <Prescriptionoutline/>
          ),
        }}
      />
      <Tabs.Screen
        name="pharmacy"
        options={{
          headerShown: false, 
          title: 'Pharmacy',
          tabBarIcon: ({ color, focused }) => (
          focused ? <Pharmacy /> : <Pharmacyoutline/>
          ),
        }}
      />

    </Tabs>
  );
}
