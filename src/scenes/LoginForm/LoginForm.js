import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { credentialsChanged, loginUserWithEmail } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../components/common';
import I18n from '../../config/i18n';
import styles from './styles';

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUserWithEmail({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        {I18n.t('button_login')}
      </Button>
    );
  }

  render() {
    return (
      <Card style={styles.containerStyle}>
        <CardSection>
          <Text style={styles.titleDescription}>Log in with email</Text>
        </CardSection>

        <CardSection style={styles.cardSpace}>
          <Input
            label={I18n.t('label_email')}
            placeholder={I18n.t('placeholder_email')}
            onChangeText={value => this.props.credentialsChanged({ prop: 'email', value })}
            value={this.props.email}
          />
        </CardSection>

        <CardSection style={styles.cardSpace}>
          <Input
            secureTextEntry
            label={I18n.t('label_password')}
            placeholder={I18n.t('placeholder_password')}
            onChangeText={value => this.props.credentialsChanged({ prop: 'password', value })}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  credentialsChanged, loginUserWithEmail
})(LoginForm);

