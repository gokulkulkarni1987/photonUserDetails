import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from "react-redux";
import { Card } from 'react-native-elements';
import {
  fetchUsers
} from './actions/HomeActions';

class HomeScreen extends Component {

  itemClicked(item) {
    // this.props.navigation.navigate({

    // })
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderItem({ item }) {
    return (
      <Card
        title={item.title}
        image={{
          uri: item.thumbnailUrl
        }}
        onPress={() => this.itemClicked(item)}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.users}
        renderItem={this.renderItem}
      />
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { ...users };
};

export default connect(mapStateToProps, {
  fetchUsers
})(HomeScreen);