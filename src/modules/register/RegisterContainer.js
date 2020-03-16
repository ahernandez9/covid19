import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import {connect} from "react-redux";

import Color from '../../resources/Color';
import {apiRegister} from './RegisterActions';

class RegisterContainer extends Component {

    renderButton() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this._register}>
                    <Text>Hola</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderButton()}
            </View>
        )
    }

    _register = () => {
        const { apiRegister } = this.props;
        apiRegister();
    }
}

const styles = {
    button: {
        width: '80%',
        height: 60,
        backgroundColor: Color.lightGrey
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const mapStateToPros = ({RegisterReducer}) => {
    const {email} = RegisterReducer;

    return {
        email
    }
};

const mapStateToPropsAction = {
    apiRegister
};

export default connect(mapStateToPros, mapStateToPropsAction)(RegisterContainer);
