import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

class DetailScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Details',
        drawerIcon: <IOSIcon name="ios-more" size={30}/>,
    };

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
                <IOSIcon name="ios-more" size={60}/>
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

export default DetailScreen;
