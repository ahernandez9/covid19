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

/**
 import React from 'react';
 import {ImageBackground, Keyboard, SafeAreaView, StatusBar} from 'react-native';
 import {connect} from 'react-redux';
 import {Button} from 'react-native-elements';

 // Actions
 import {checkFirstAction, clearData, login, setStateLogin,} from '../actions/LoginActions';
 import {setUserLogout} from 'services/user/UserAction';

 // Base
 import BaseComponent from 'base/BaseComponent';

 // Components
 import LoginForm from '../components/LoginForm';

 // Resources
 import {localAssets} from 'resources/assets/assets';
 import {strings} from 'resources/locales/i18n';
 import {Buttons, Texts} from 'resources/styles';
 import Color from 'resources/values/color';
 import Routing from 'Routing';

 // Styles
 import {authStyle} from '../auth.style';


 class LoginContainer extends BaseComponent {

  componentWillMount() {
    this.props.clearData();
    // this.props.checkFirstAction(this.props);
  }

  componentWillUnmount() {
    Keyboard.dismiss();
  }

  render() {
    const { accessToken } = this.props;

    if (accessToken && accessToken.length > 0) {
      return this.renderLoginSession();
    }

    return this.renderLoginForm();
  }

  renderLoginForm() {
    const { email, password, error, isLoading } = this.props;

    return (
      <ImageBackground
        style={authStyle.container}
        source={localAssets.bgGradient}
        resizeMode={'cover'}
      >
        <StatusBar backgroundColor={Color.transparent} translucent={true}/>
        <SafeAreaView style={authStyle.container}>
          <LoginForm
            email={email}
            password={password}
            error={error}
            isLoading={isLoading}
            onLinkPress={ this._handleRememberPassword }
            onRegister={ this._handleRegister }
            onSubmit={ this._handleFormSubmit }
            onValueChange={ this._handleValueChange }
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  renderLoginSession() {
    const { accessToken, firstName, email, emailUser, password, error, isLoading } = this.props;

    // Set email if exist previous session of the current user
    if (accessToken) {
      this._handleValueChange('email', emailUser);
    }

    return (
      <ImageBackground
        style={authStyle.container}
        source={localAssets.bgGradient}
        resizeMode={'cover'}
      >
        <StatusBar backgroundColor={Color.transparent} translucent={true}/>
        <SafeAreaView style={authStyle.container}>
          <LoginForm
            name={firstName}
            email={email}
            password={password}
            error={error}
            isLoading={isLoading}
            isUserSession
            onLinkPress={ this._handleRememberPassword }
            onRegister={ this._handleRegister }
            onSubmit={ this._handleFormSubmit }
            onValueChange={ this._handleValueChange }
          />
          <Button
            title={strings('button.changeUser')}
            containerViewStyle={Buttons.containerButtonWidth100}
            buttonStyle={ [Buttons.buttonWhiteAlpha01] }
            textStyle={ [Texts.textButton, Texts.textColorWhite, Texts.textBold] }
            onPress={ () => this._handleChangeUser() }
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  /** PRIVATE METHODS **
_handleChangeUser = () => {
    this.props.setUserLogout();
};

_handleFormSubmit = () => {
    Keyboard.dismiss();
    this.props.login(this.props);
};

_handleRegister = () => {
    Routing.route(Routing.register);
};

_handleRememberPassword = () => {
    Routing.route(Routing.rememberPassword);
};

_handleValueChange = (prop, value) => {
    this.props.setStateLogin({ prop, value });
};
}

const mapStateToProps = ({ AppReducer, LoadingReducer, LoginReducer, UserReducer }) => {
    const { phoneId, tokenPush } = AppReducer;
    const { isLoading } = LoadingReducer;
    const { email, password, error } = LoginReducer;
    const { accessToken, firstName, email: emailUser } = UserReducer;
    return {
        phoneId, tokenPush,
        isLoading,
        email, password, error,
        accessToken, firstName, emailUser
    };
};

const mapStateToPropsAction = {
    checkFirstAction,
    clearData,
    login,
    setStateLogin,
    setUserLogout
};

export default connect(mapStateToProps, mapStateToPropsAction)(LoginContainer);
 --------------------------------------------------------------------------------------------------


 import React from 'react';
 import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native';
 import {Button} from 'react-native-elements';
 import PropTypes from 'prop-types';

 // Components
 import {FormType, Link, TextInputLayoutItem} from 'components';
 import {isValidEmail, isValidPassword} from 'utils/managers';

 // Resources
 import {strings} from 'resources/locales/i18n';
 import {localAssets} from 'resources/assets/assets';
 import {Buttons, Forms, Style, Texts} from 'resources/styles';
 import {authStyle, boardStyle, loginFormStyle} from '../auth.style';
 import Color from 'resources/values/color';


 const LoginForm = (props) => {
  const { email, password, name, isUserSession, onLinkPress, onSubmit, onValueChange, error } = props;

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      style={authStyle.container}
    >
      <ScrollView
        contentContainerStyle={authStyle.containerScrollView}
        keyboardDismissMode={'interactive'}
        keyboardShouldPersistTaps={'handled'}
      >
        <View>
          <Image
            style={loginFormStyle.imgLogo}
            source={localAssets.imgLogo}
            resizeMode={'contain'}
          />

          {/* User session *}
{
    isUserSession &&
    <Text style={ [Texts.title, Texts.textColorWhite, loginFormStyle.textHi] }>
        {name && name.length > 0 ? strings('title.hiUser', {name}) : strings('title.hi')}
    </Text>
}

{/* Email /}
{
    !isUserSession &&
    <TextInputLayoutItem
        fieldValidation={isValidEmail}
        formType={FormType.WHITE}
        style={authStyle.inputBottomBorderWhite}
        styleText={authStyle.inputText}
        reference={(input) => this.email = input}
        placeholder={strings('placeholder.email')}
        value={email}
        field={'email'}
        autoCapitalize={'none'}
        returnKey={'next'}
        focusColor={Color.white}
        hintColor={Color.white}
        error={error}
        onValueChange={onValueChange}
        onPressCurrent={() => (this.email) ? this.email.focus() : {}}
        onSubmitting={() => (this.password) ? this.password.focus() : {}}
    />
}

{/* Password *}
    <TextInputLayoutItem
        fieldValidation={isValidPassword}
        formType={FormType.WHITE}
        style={authStyle.inputBottomBorderWhite}
        styleText={authStyle.inputText}
        reference={(input) => this.password = input}
        placeholder={strings('placeholder.password')}
        value={password}
        field={'password'}
        autoCapitalize={'none'}
        returnKey={'done'}
        secureTextEntry={true}
        selectTextOnFocus={true}
        focusColor={Color.white}
        hintColor={Color.white}
        error={error}
        onValueChange={onValueChange}
        onPressCurrent={() => (this.password) ? this.password.focus() : {}}
        onSubmitting={() => {
            Keyboard.dismiss();
            if (email && password) onSubmit();
        }}
/>

{/* Link and errors *}
<Link
    containerStyle={loginFormStyle.containerForgotPassword}
    textStyle={loginFormStyle.textForgotPassword}
    onPress={onLinkPress}
>
    {strings('button.forgotPassword')}
</Link>
</View>

{/* Bottom Fields *}
<View style={authStyle.containerButtons}>
    { renderButtonLogin(props, strings('button.login')) }
    { renderButtonRegister(props, strings('button.register')) }
</View>

</ScrollView>
</KeyboardAvoidingView>
);
};

LoginForm.propTypes = {
name:          PropTypes.string,
email:         PropTypes.string.isRequired,
password:      PropTypes.string.isRequired,
error:         PropTypes.object,
isLoading:     PropTypes.bool,
isUserSession: PropTypes.bool,
onLinkPress:   PropTypes.func.isRequired,
onSubmit:      PropTypes.func.isRequired,
onValueChange: PropTypes.func.isRequired
};

const renderButtonLogin = (props, title) => {
const { isLoading, onSubmit } = props;
return (
<Button
title={ !isLoading ? title : '' }
containerViewStyle={ [Buttons.containerButtonWidth100, Buttons.buttonBorderRadius, {overflow: 'hidden'}] }
buttonStyle={ [Buttons.buttonWhite, Buttons.buttonBorderRadius] }
textStyle={ [Texts.textButton, Texts.textColorSecondText, Texts.textBold] }
color={Color.secondText}
loading={isLoading}
onPress={ !isLoading ? onSubmit : null }
// disabled={ !(usernameValue && passwordValue) }
/>
);
};

const renderButtonRegister = (props, title) => {
const { isUserSession, onRegister } = props;

if (isUserSession) {
return null;
}

return (
<Button
title={ title }
containerViewStyle={ [Buttons.containerButtonWidth100, Buttons.buttonBorderRadius, authStyle.button] }
buttonStyle={ [Buttons.buttonTransparentWhiteBorder, Buttons.buttonBorderRadius] }
textStyle={ [Texts.textButton, Texts.textColorWhite, Texts.textBold] }
onPress={ onRegister }
/>
);
};

export default LoginForm;



------------------------------------------------------------------------------------------


 import React, { Component } from 'react';
 import {
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
 import PropTypes from 'prop-types';

 // Components
 import {FormType, TextInputLayout} from 'components';

 // Resources
 import {localAssets} from 'resources/assets/assets';
 import {Forms} from './styles';
 import {Style} from 'resources/styles';
 import Color from 'resources/values/color';


 const TextInputLayoutItem = (props) => {
  const {
    containerStyle, style, styleText, formType, borderColor, focusColor, hintColor, reference, placeholder, value, field,
    autoCapitalize, returnKey, keyboardType, editable, maxLength, secureTextEntry, selectTextOnFocus,
    error, fieldValidation, onValueChange, onPressCurrent, onSubmitting
  } = props;

  const iconCheck = value && value.length > 0 && fieldValidation && fieldValidation(value) ? localAssets.icCheck : null;
  const iconError = localAssets.icError;
  const iconRight = error && error.key === field && fieldValidation && !fieldValidation(value) ? iconError : iconCheck;
  let defaultStyle, defaultTextStyle, bgError, textError, iconRightColor, focusColorValue, hintColorValue;

  switch (formType) {
    case FormType.BLACK:
      defaultStyle     = {borderBottomColor: Color.black};
      defaultTextStyle = {color: Color.black};
      bgError          = error && error.key === field ? Color.errorRed : Color.transparent;
      textError        = error && error.key === field ? Color.error : Color.black;
      iconRightColor   = iconCheck ? Color.black : Color.error;
      break;

    case FormType.PRIMARY:
      defaultStyle     = {borderBottomColor: Color.primary};
      defaultTextStyle = {color: Color.primary};
      bgError          = error && error.key === field ? Color.backgroundErrorPrimary : Color.transparent;
      textError        = error && error.key === field ? Color.white : Color.primary;
      iconRightColor   = iconCheck ? Color.primary : Color.white;
      break;

    case FormType.WHITE:
      defaultStyle     = {borderBottomColor: Color.white};
      defaultTextStyle = {color: Color.white};
      bgError          = error && error.key === field ? Color.errorWhite : Color.transparent;
      textError        = Color.white;
      iconRightColor   = iconCheck && Color.white;
      break;

    default:
      bgError        = Color.transparent;
      textError      = Color.primary;
      iconRightColor = Color.transparent;
  }

  focusColorValue = error && error.key === field ? textError : focusColor || Color.gray;
  hintColorValue  = error && error.key === field ? textError : hintColor || Color.gray;

  return (
    <TouchableWithoutFeedback
      onPress={onPressCurrent}
    >
      <View style={ [Forms.widthFull, containerStyle] }>
        <View>
          <TextInputLayout
            style={ [Forms.input, defaultStyle, style, {backgroundColor: bgError}] }
            labelText={placeholder}
            labelFontSize={Style.FONT_SIZE_SMALL_S}
            focusColor={focusColorValue}
            hintColor={hintColorValue}
            // errorColor={checkError}
            // checkValid={ t => console.log("error: ", error && error.key === field) }
          >

            <TextInput
              ref={ reference }
              refInner={ field }
              style={ [Forms.inputLayoutText, defaultTextStyle, styleText, {color: textError}] }
              underlineColorAndroid={ 'transparent' }
              autoCorrect={ false }
              autoCapitalize={ autoCapitalize }
              returnKeyType={ returnKey }
              keyboardType={ keyboardType ? keyboardType : 'default' }
              secureTextEntry={ secureTextEntry }
              selectTextOnFocus={ selectTextOnFocus }
              maxLength={ maxLength }
              defaultValue={ value }
              editable={ editable !== undefined ? editable : true }
              blurOnSubmit={ false }
              onChangeText={ (text) => onValueChange(field, text) }
              onSubmitEditing={ onSubmitting }
            />
          </TextInputLayout>
          <View style={{ position: 'absolute', bottom: 5, right: 5 }}>
            <Image
              style={{ width: 30, height: 30, tintColor: iconRightColor }}
              source={iconRight}
              resizeMode={'contain'}
            />
          </View>
        </View>
        {renderInputLayoutError(error, field, formType)}
      </View>
    </TouchableWithoutFeedback>
  );
};

 const renderInputLayoutError = (error, key, formType) => {
  if (error && error.key === key) {
    let style = Forms.inputLayoutTextError;

    if (formType && formType === FormType.BLACK) {
      style = [Forms.inputLayoutTextError, Forms.inputLayoutTextRedError];
    }
    if (formType && formType === FormType.WHITE) {
      style = [Forms.inputLayoutTextError, Forms.inputLayoutTextWhiteError];
    }

    return (
      <View style={Forms.inputLayoutError}>
        <Text style={style}>{error.value}</Text>
      </View>
    )
  }

  // No error
  return <View/>
};

 TextInputLayoutItem.propTypes = {
  reference:          PropTypes.func,
  formType:           PropTypes.string,
  borderColor:        PropTypes.string,
  focusColor:         PropTypes.string,
  hintColor:          PropTypes.string,
  placeholder:        PropTypes.string,
  value:              PropTypes.string,
  field:              PropTypes.string,
  autoCapitalize:     PropTypes.string,
  returnKey:          PropTypes.string,
  keyboardType:       PropTypes.string,
  editable:           PropTypes.bool,
  secureTextEntry:    PropTypes.bool,
  selectTextOnFocus:  PropTypes.bool,
  maxLength:          PropTypes.number,
  error:              PropTypes.object,
  fieldValidation:    PropTypes.func,
  onValueChange:      PropTypes.func,
  onPressCurrent:     PropTypes.func,
  onSubmitting:       PropTypes.func,
  containerStyle:     Text.propTypes.style,
  style:              Text.propTypes.style,
  styleText:          Text.propTypes.style
};

 TextInputLayoutItem.defaultProps = {

};

 export { TextInputLayoutItem };



-------------------------------------------------------------------------------
 TAB BAR

 import React, {Component} from 'react';
 import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
 import {connect} from 'react-redux';

 // Navigation
 import {Actions} from 'react-native-router-flux';
 import Routing from './Routing'

 // Resources
 import {Style} from '../../resources/styles';
 import Color from '../../resources/colors';
 import {localAssets} from "../../resources/assets";


 class TabBarMain extends Component {

  scenes = {
    [Routing.myAccount]:      {active: localAssets.icProfileAct, inactive: localAssets.icProfile},
    [Routing.main]:           {active: localAssets.icCalendarAct, inactive: localAssets.icCalendar},
    // [Routing.notifications]:  {active: localAssets.icBellAct, inactive: localAssets.icBell}
  };

  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;
    let index = 0;

    return (
        <View style={styles.container}>
          {state.routes.map(element => (
                this._renderButton(element, index++ === activeTabIndex)
            ))}
        </View>
    );
  }

  _renderButton(scene, active) {
    const key   = this.scenes[scene.key];

    return(
        <View style={styles.containerSide} key={scene.key}>
          <TouchableOpacity
              style={ styles.containerBackButton }
              onPress={() => Actions[scene.key]()}
          >
            <Image
                style={ styles.icon }
                source={ active ? key.active : key.inactive}
                resizeMode={ 'contain' }
            />
          </TouchableOpacity>
        </View>
    );
  }
}

 const height     = Style.NAV_BAR_HEIGHT;
 const iconSize  = 40;
 const styles = StyleSheet.create({
  container: {
    height: height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    borderTopWidth: 1,
    borderTopColor: Color.darkGrey
  },
  containerBackButton: {
    height: iconSize,
    width: iconSize,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  containerSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
        ios: {
            marginBottom: 20,
        }
    }),
  },
  icon: {
    flex: 0.9,
    height: '100%',
    width: '100%'
  }
});

 const mapStateToProps = () => {
  return { };
};

 export default  connect(mapStateToProps, null) (TabBarMain);


-----------------------------------------------------------------------------
 ROUTER

 import React from 'react';
 import { StyleSheet } from 'react-native';
 import {Lightbox, Router, Scene, Stack, Tabs} from 'react-native-router-flux';

 // Navigation
 import TabBarMain from './TabBarMain';
 import NavBarBack from "./NavBarBack";
 import NavBarTitle from "./NavBarTitle";

 // Resources
 import {Style} from '../../resources/styles';
 import Color from '../../resources/colors';
 import Routing from './Routing';
 import {strings} from "../../resources/locales/i18n";

 // Views
 import MainContainer from '../../modules/main/MainContainer'
 import MyAccountContainer from '../../modules/account/myAccountContainer'
 import NotificationsContainer from '../../modules/notifications/NotificationsContainer'
 import PinContainer from "../../modules/auth/containers/PinContainer";
 import LightBoxAdvance from "../../modules/lightBox/LightBoxAdvance";
 import LoginContainer from "../../modules/auth/containers/LoginContainer";
 import PayslipsContainer from "../../modules/account/PayslipsContainer";

 const RouterComponent = () => {

    return (
        <Router style={styles.router}>
            {/** Main stack **}

<Lightbox key={Routing.lightBox}>
    <Stack key={Routing.root}>

        {/** Login **}
        <Scene
            initial
            key={Routing.login}
            hideNavBar
            component={LoginContainer}
        />

        {/** Enter PIN **}
        <Scene
            key={Routing.enterPin}
            hideNavBar
            component={PinContainer}
        />

        {/** Main Tab bar **}
        <Tabs
            key={Routing.mainTabs}
            tabBarComponent={TabBarMain}
            hideNavBar
        >
            {/** My account **}
            <Stack key={Routing.myAccount}>

                {/* My account => Main *}
                <Scene
                    key={Routing.myAccountMain}
                    navBar={NavBarTitle}
                    component={MyAccountContainer}
                    title={strings("title.profile")}
                />

                {/* My account => Payslips *}
                <Scene
                    key={Routing.payslips}
                    hideNavBar
                    component={PayslipsContainer}
                />
            </Stack>

            {/** Main container **}
            <Scene
                key={Routing.main}
                component={MainContainer}
                hideNavBar
            />
        </Tabs>

    </Stack>

    {/** LightBox **}
    <Scene
        key={Routing.lightBoxAdvance}
        component={LightBoxAdvance}
        hideNavBar
    />

</Lightbox>
</Router>
);
};

const styles = StyleSheet.create({
    router: {
        flex: 1,
        backgroundColor: Color.white
    },
    labelStyle: {
        fontSize: Style.FONT_SIZE_SMALL_S,
        margin: 0,
    },
    tabBarStyle:{
        backgroundColor: Color.second,
        borderBottomWidth: 1,
        borderBottomColor: Color.second,
    },
    titleStyle: {
        fontSize: Style.FONT_SIZE_TITLE,
        color: Color.white,
        backgroundColor: Color.second,
        textAlign: 'left',
        // alignSelf: 'center'
    },
    titleStyleLegal: {
        fontSize: 20,
        textAlign: 'left'
    },
    navigationBarStyle: {
        height: Style.NAV_BAR_HEIGHT,
        backgroundColor: Color.second,
        borderBottomWidth: 0,
        //iOS -> Shadow
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //Android -> Shadow
        elevation: 0,
    }
});

export default RouterComponent;

**/
