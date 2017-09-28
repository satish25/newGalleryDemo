/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, ListView, Image, ScrollView
} from 'react-native';
import * as _ from 'lodash'
import ImageCarousell from 'react-native-image-carousell';

export default class newImageGallery extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([
        require('./images/1.png'),
        require('./images/2.png'),
        require('./images/3.png'),
        require('./images/4.png'),
        require('./images/5.png'),
        require('./images/6.png'),
        require('./images/7.png'),
        require('./images/8.png'),
        require('./images/9.png'),
        require('./images/10.png'),
      ]),

      images:[
        require('./images/1.png'),
        require('./images/2.png'),
        require('./images/3.png'),
        require('./images/4.png'),
        require('./images/5.png'),
        require('./images/6.png'),
        require('./images/7.png'),
        require('./images/8.png'),
        require('./images/9.png'),
        require('./images/10.png'),
      ]
    };
  }
  scrollingto(event) {
      console.log(event.nativeEvent.contentOffset)

          this.refs._scrollView2.scrollTo({x:event.nativeEvent.contentOffset.x})

      console.log('this', this.refs._scrollView2);
  }


    scrollingto2(event) {
        console.log(event.nativeEvent.contentOffset)

        this.refs._scrollView1.scrollTo({x:event.nativeEvent.contentOffset.x})

        console.log('this', this.refs._scrollView2);
    }

    render() {
    return (
      <View style={styles.container}>
        {/* <ImageCarousell
          dataSource={this.state.dataSource}
        /> */}
     <View style={{flex:3, marginTop:60}}>
       <ScrollView horizontal={true} onScroll={this.scrollingto2.bind(this)} ref='_scrollView2'>
      {_.map([1,2,3,4,5,6,7,8], function () {

          return (
              <View style={{width:300, backgroundColor:'red', height:300, marginLeft:10}}/>
          )
      })}
      </ScrollView>
      </View>

      <View style={{position:'absolute', bottom:0, marginBottom:10, flex:1}}>
        <ScrollView horizontal={true} onScroll={this.scrollingto.bind(this)} ref='_scrollView1'>
          {_.map([1,2,3,4,5,6,7,8], function () {

            return (
              <View style={{width:100, backgroundColor:'red', height:100, marginLeft:10}}/>
            )
          })}
        </ScrollView>
      </View>
        <View style={{width:105, height: 120, borderWidth: 2, borderColor:'green'}}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('newImageGallery', () => newImageGallery);
