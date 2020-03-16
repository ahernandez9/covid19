import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {apiLogin} from './LoginActions';
import Color from '../../resources/Color';
import Routing from '../../services/navigation/Routing';

class LoginContainer extends Component {

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
                {this.renderButton(this._login, 'Post')}
                {this.renderButton(this._goToRegister, 'Navigate')}
            </View>
        )
    }

    _login = () => {
        const { apiLogin } = this.props;
        apiLogin();
    };

    _goToRegister = () => {
        Routing.route(Routing.register)
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

const mapStateToPros = state => {
    return {
    }
};

const mapStateToPropsAction = {
    apiLogin
};

export default connect(mapStateToPros, mapStateToPropsAction)(LoginContainer);
