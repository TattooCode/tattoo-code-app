import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RequestNotification } from '../../components/RequestNotification';
import { loadIdeaNotification } from '../../actions';

class Notification extends Component {

  componentWillMount() {
    this.props.loadIdeaNotification();
  }

  render() {
    return this.props.requestNotification.map(item =>
      <RequestNotification key={item.id} notification={item} />);  
  }
}

const mapStateToProps = ({ requestNotification }) => {
  return requestNotification;
};

export default connect(mapStateToProps, {
   loadIdeaNotification 
})(Notification);

