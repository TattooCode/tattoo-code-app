import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { RequestNotification } from '../../components/RequestNotification';
import { loadIdeaNotification } from '../../actions';

class Notification extends Component {

  componentWillMount() {
    this.props.loadIdeaNotification();
  }

  render() {
    return (
      <ScrollView>
        {this.props.ideas.map(item => <RequestNotification key={item.id} notification={item} />)}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ requestNotification }) => {
  const { ideas } = requestNotification;
  return { ideas };
};

export default connect(mapStateToProps, {
   loadIdeaNotification 
  })(Notification);

