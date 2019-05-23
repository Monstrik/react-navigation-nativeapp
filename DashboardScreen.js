import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, StatusBar} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

class DashboardScreen extends Component {
    static  navigationOptions = ({navigation}) => ({
        title: 'Dashboard',
        drawerLabel: 'Dashboard',
        drawerIcon: <IOSIcon name="ios-happy" size={30}/>,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IOSIcon name="ios-menu" size={30}/>
            </TouchableOpacity>
        ),
        headerStyle: {paddingRight: 10, paddingLeft: 15, backgroundColor: 'limegreen'},
    });


    // <SafeAreaView>
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <IOSIcon name="ios-happy" size={60}/>
                <Text>Dashboard Screen</Text>
                <Button
                    onPress={() => this.props.navigation.toggleDrawer()}
                    title="Toggle"/>
                <Text>---</Text>
                <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page"/>
                <Button onPress={() => this.props.navigation.navigate("Notifications")} title="Notifications Page"/>
                <Button onPress={() => this.props.navigation.navigate("Drawer")} title="Drawer Page"/>
                <Button onPress={() => this.props.navigation.navigate("Login")} title="Login Page"/>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DashboardScreen;
