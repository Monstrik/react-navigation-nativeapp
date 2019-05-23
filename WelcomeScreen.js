import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

class WelcomeScreen extends Component {

    static navigationOptions= {
        title: 'Welcome local',
        drawerLabel: 'User',
        drawerIcon: <IOSIcon name="ios-man" size={30}/>,
        headerStyle: {
            color: 'white',
            backgroundColor: '#fff',
        },
        gesturesEnabled: false
    };

    render () {
        setTimeout(()=>{
            this.props.navigation.navigate("Dashboard");
        },10000);
        return (
            <View style={styles.container}>
                <Text>Welcome Screen</Text>
                <Button onPress={() => this.props.navigation.navigate("Dashboard")} title="Log-in" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;
