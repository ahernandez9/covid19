import React, {Component} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";

class LoginContainer extends Component {

    render() {
        return (
            <View>

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
        mostPopularMedia: state.listViewReducer,
    }
};

const mapStateToPropsAction = {getMovieDetailAction, getTVShowDetailAction};

export default connect(mapStateToPros, mapStateToPropsAction)(LoginContainer);
