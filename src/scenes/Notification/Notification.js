import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { RequestNotification } from '../../components/RequestNotification';
import { NavScenes } from '../../components/NavScenes';
import { loadIdeaNotification } from '../../actions';

class Notification extends Component {

  componentWillMount() {
    this.props.loadIdeaNotification();
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.props.ideas.map(item => <RequestNotification key={item.id} notification={item} />)}
        </ScrollView>

        <View style={{ flex: 0.1 }}>
          <NavScenes />
        </View>
      </View>
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

