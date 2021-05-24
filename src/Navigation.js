import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import PayScreen from './screens/Pay'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                object={{
                    title: 'Início'
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                object={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen
                name="Pay"
                component={PayScreen}
                object={{
                    title: 'Pagar'
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={PayScreen}
                object={{
                    title: 'Notificações'
                }}
            />
            <Tab.Screen
                name="Settings"
                component={PayScreen}
                object={{
                    title: 'Ajustes'
                }}
            />
        </Tab.Navigator>
    )
}