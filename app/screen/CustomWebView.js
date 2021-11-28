import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';

const CustomWebView = props => {
  const {url} = props.route.params;
  console.log(
    'ABC ~ file: CustomWebView.js ~ line 8 ~ CustomWebView ~ url',
    url,
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        injectedJavaScript={'(function(){return "Send me back!"}());'}
        onNavigationStateChange={navEvent => {
          console.log('CustomWebView onNavigationStateChange', navEvent);
          if (navEvent.title === 'success') {
            console.log('CustomWebView onNavigationStateChange 1');
            setTimeout(() => {
              props.navigation.navigate('BottomNavi');
            }, 2000);
          }
        }}
        onMessage={event =>
          console.log('CustomWebView onMessage', event.nativeEvent.data)
        }
      />
    </SafeAreaView>
  );
};

export default CustomWebView;
