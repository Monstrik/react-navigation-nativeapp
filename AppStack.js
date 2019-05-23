// Main Screens for Drawer Navigator
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import {DrawerItems, createStackNavigator, createDrawerNavigator} from "react-navigation";
import WelcomeScreen from "./WelcomeScreen";
import DetailScreen from "./DetailScreen";
import DashboardScreen from "./DashboardScreen";
import NotificationScreen from "./NotificationScreen";
import IOSIcon from 'react-native-vector-icons/Ionicons'

// Custom Drawer Content
const DrawerContent = (props) => (
    <View>
        <View
            style={{
                backgroundColor: '#f50057',
                height: 270,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{color: 'white', fontSize: 30}}>
                Custom Header
            </Text>
            <IOSIcon name="ios-menu" style={{color: 'white', fontSize: 80}}/>
        </View>
        <View
            style={{
                backgroundColor: 'rgb(180,0,74)',
                height: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
        </View>
        <DrawerItems {...props} />
        <View
            style={{
                backgroundColor: 'rgb(180,0,74)',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
        </View>
    </View>
);

// Drawer Navigator
export const Drawer = createDrawerNavigator({
    Dashboard: DashboardScreen,
    Detail: DetailScreen,
    Notifications: NotificationScreen,
    Login: WelcomeScreen
}, {
    // define customComponent here
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: 'red',
    },
    navigationOptions: ({navigation}) => ({
        // show internal route name
        title: navigation.state.routes[navigation.state.index].routeName,
        headerStyle: {
            backgroundColor: 'lightgray',
        },
        headerTintColor: '#f00',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000',
        },
        headerLeftContainerStyle: {
            paddingHorizontal: 10,
        },
        headerRightContainerStyle: {
            paddingHorizontal: 10,
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IOSIcon name="ios-menu" size={30}/>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <IOSIcon name="ios-log-out" size={30}/>
            </TouchableOpacity>
        ),

        // header: null,
        // gesturesEnabled: false
    })
});


// Main App Navigation
export const AppStack = createStackNavigator(
    {
        Login: {
            screen: WelcomeScreen,
            // Override navigationOptions
            navigationOptions: {
                title: 'Welcome',
                headerStyle: {
                    backgroundColor: 'darkred',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#fff',

                },
                gesturesEnabled: false
            }
        },
        Drawer: Drawer,
    },
    {
        headerMode: 'screen',
    });
