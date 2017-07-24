import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView, Text } from 'react-native';
import { credentialsChanged, createUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../components/common';
import { ImagePickerComponent } from '../../components/ImagePickerComponent';
import I18n from '../../config/i18n';
import styles from './styles';

class BasicAccountCreate extends Component {

	constructor(props) {
		super(props);
		this.state = { photo: '' };
	}
	
	onButtonPress() {
		const { name, nickname, email, password, biography, photo } = this.props;
		
		this.props.createUser({ name, nickname, email, password, biography, photo });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				{I18n.t('button_create_account')}
			</Button>
		);
	}
		
	render() {
		return (
			<ScrollView>
				<Card style={styles.containerStyle}>

					<CardSection>
						<Text style={styles.titleDescription}>Sign up with email</Text>
					</CardSection>

					<CardSection>
						<Input 
							label={I18n.t('label_name')}
							placeholder={I18n.t('placeholder_name')}
							value={this.props.nome}
							onChangeText={value => this.props.credentialsChanged({ prop: 'name', value })}
						/> 
					</CardSection> 
					
					<CardSection>
						<Input 
							label={I18n.t('label_nickname')}
							placeholder={I18n.t('placeholder_nickname')}
							value={this.props.nickname}
							onChangeText={value => this.props.credentialsChanged({ prop: 'nickname', value })}
						/>
					</CardSection>
					
					<CardSection>
						<Input 
							label={I18n.t('label_email')}
							placeholder={I18n.t('placeholder_email')}
							value={this.props.email}
							onChangeText={value => this.props.credentialsChanged({ prop: 'email', value })}
						/>
					</CardSection> 
					
					<CardSection>
						<Input
							secureTextEntry 
							label={I18n.t('label_password')}
							placeholder={I18n.t('placeholder_password')}
							value={this.props.password}
							onChangeText={value => this.props.credentialsChanged({ prop: 'password', value })}	
						/>
					</CardSection>
					
					<CardSection>
						<Input 
							label={I18n.t('label_biography')}
							placeholder={I18n.t('placeholder_biography')}
							value={this.props.biography}
							onChangeText={value => this.props.credentialsChanged({ prop: 'biography', value })}
						/> 
					</CardSection>

					<CardSection>
						<ImagePickerComponent 
							updateState={value => this.props.credentialsChanged({ prop: 'photo', value })}
						/>
					</CardSection>

					<CardSection> 
						{this.renderButton()}
					</CardSection>
				</Card>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ register }) => {
	const { name, nickname, email, password, biography, photo } = register;
	
	return { name, nickname, email, password, biography, photo };
};

export default connect(mapStateToProps, {
	credentialsChanged, createUser
})(BasicAccountCreate);
