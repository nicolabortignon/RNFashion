import React from 'react';
import { connect } from 'react-redux'
import { View, ListView, StyleSheet, Text, BackAndroid, RefreshControl } from 'react-native';
import Item from './Item';

import { fetchFeed } from './../../redux/modules/posts'

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#ffffff',
  },
  listViewStyle: {
  }
});

class StreamListView extends React.Component {



  constructor(props) {
    super(props);

    var self = this
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id || r1.updatedAt !== r2.updatedAt});
     this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
    };
    this.props.dispatch(fetchFeed()).then(function(){
      self.updateListView();
    })
  }

  _onRefresh() {
    this.setState({refreshing: true}, function(){
        this.props.dispatch(fetchFeed());

    });

  }

  componentWillUpdate(){
    if(this.state.refreshing){
      console.log('KILL the refreshing');
      this.setState({refreshing: false}, function(){
        console.log(this.state.refreshing);
        this.updateListView()
      });
    }
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    this.updateListView();

  }

  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
          this.updateListView();
  }

  handleBackButton() {
      if (this.props.navigator) {
        console.log('need to pop out something ')
          this.props.navigator.pop();
          return true;
      }
      return true;
  }




  updateListView(){
    console.log('UPDATE LIST VIEW ')
    if(!this.props.posts) return;
    // NOW THE DATA IS ORDER
    const newDataStore = this.state.dataSource.cloneWithRows(this.props.posts);
    console.log(newDataStore);
    // TODO: the stop condition to avoid loop updates is really naive, to be fixed
    console.log(this.state.dataSource.getRowCount());
    console.log(newDataStore.getRowCount());
      this.setState({
        dataSource: newDataStore,
      });



  }
  handlerSelection(id,active){
    //this.props.handlerSelection(id,active);
  }


  render() {
    if(!this.state.dataSource){
      return(<View />)
    }
    return (
      <ListView
        refreshControl={
          <RefreshControl
            enableEmptySections={true}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            title="Loading..."
            titleColor="#000000"
          />}
        enableEmptySections={true}
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Item navigator={this.props.navigator} {...data} active={false} onPress={this.handlerSelection.bind(this)} />}
      />
    );
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: posts.feed
  }
}


export default connect(mapStateToProps)(StreamListView)
