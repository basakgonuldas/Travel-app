import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarStyle: {
          position: 'absolute', // TabBar'ı yukarı kaldırmak için
          bottom: 20, // Aşağıdan mesafe bırakmak için
          left: 20, // Kenarlardan içeri almak için
          right: 20, 
          height:60,
          alignSelf: 'center', // Ortala
          backgroundColor: 'white', // Arka plan rengi
          borderRadius: 20, // Köşeleri yuvarlatmak için
          elevation: 5, // Android'de gölge efekti için
          shadowOpacity: 0.1,
          shadowRadius: 10,
        }
        
    }}>
        <Tabs.Screen name="mytrip"
          options={{
            tabBarLabel:'My Trip',
            tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color}/>
          }}
        />
         <Tabs.Screen name="discover"
          options={{
            tabBarLabel:'Discover',
            tabBarIcon:({color})=><Ionicons name="earth" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name="profile"
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=><Ionicons name="people-circle-outline" size={24} color={color} />
          }}
        />
    </Tabs>
  )
}