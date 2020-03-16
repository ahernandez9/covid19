import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import {connect} from "react-redux";

import Color from '../../resources/Color';
import {apiRegister} from './RegisterActions';
import Routing from '../../services/navigation/Routing';

class RegisterContainer extends Component {

    renderButton(onPress, title) {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{textAlign: 'center'}}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderButton(this._register, 'Post')}
                {this.renderButton(this._goToLogin, 'Navigate')}
            </View>
        )
    }

    _register = () => {
        const { apiRegister } = this.props;
        apiRegister();
    };

    _goToLogin = () => {
        Routing.route(Routing.login)
    }
}

const styles = {
    button: {
        width: '80%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
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
