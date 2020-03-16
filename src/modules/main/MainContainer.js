import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from "react-redux";

class MainContainer extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Hola</Text>
            </View>
        )
    }
}

const styles = {
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Wanted M54',
        marginBottom: 20,
        marginTop: 10,
        color: 'white'
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 70,
        height: 70,
        borderRadius:65/2,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    }
};

const mapStateToPros = state => {
    return {
    }
};

const mapStateToPropsAction = {};

export default connect(mapStateToPros, mapStateToPropsAction)(MainContainer);
