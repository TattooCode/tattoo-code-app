import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RequestNotification } from '../../components/RequestNotification';
import { loadIdeaNotification } from '../../actions';

class Notification extends Component {

  componentWillMount() {
    this.props.loadIdeaNotification();
  }

  render() {
    return this.props.notification.map(item =>
      <RequestNotification key={item.id} notification={item} />);  
  }
}

const mapStateToProps = state => {
  console.log(state);
  const { id, user, uri, description, date } = state;
  return { id, user, uri, description, date };
};

export default connect(mapStateToProps, {
   loadIdeaNotification 
  })(Notification);

