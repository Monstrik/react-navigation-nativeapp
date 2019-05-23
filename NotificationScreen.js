import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

class NotificationScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Notifications',
        drawerLabel: 'Notifications',
        drawerIcon: <IOSIcon name="ios-notifications" size={30}/>,
    };


    render () {
        return (
            <View style={styles.container}>
                <IOSIcon name="ios-notifications" size={60}/>
                <Text>Notification Screen</Text>
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

export default NotificationScreen;
