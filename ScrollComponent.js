import React, {forwardRef, Fragment, useMemo, useState} from 'react';
import {ScrollView as RNScrollView, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const ScrollViewWrapped = forwardRef((props, ref) => {
  return (
    <View style={{flex: 1}}>
      <RNScrollView {...props} ref={ref} />
    </View>
  );
});

const ScrollView = forwardRef((props, ref) => (
  <RNScrollView {...props} ref={ref} />
));

const AnimatedScrollViewWrapped =
  Animated.createAnimatedComponent(ScrollViewWrapped);
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function ScrollComponent({isWrapped}) {
  const [scrollValue, setScrollValue] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => runOnJS(setScrollValue)(contentOffset.y),
  });

  const items = useMemo(
    () =>
      Array.from({length: 30}).map((_, index) => (
        <View
          key={index}
          style={{
            height: 100,
            width: '100%',
            backgroundColor: 'white',
            marginBottom: 20,
          }}
        />
      )),
    [],
  );

  if (isWrapped) {
    return (
      <>
        <Text>{scrollValue}</Text>
        <AnimatedScrollViewWrapped
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          style={{backgroundColor: 'red', padding: 10}}>
          {items}
        </AnimatedScrollViewWrapped>
      </>
    );
  }

  return (
    <>
      <Text>{scrollValue}</Text>
      <AnimatedScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{backgroundColor: 'blue', padding: 10}}>
        {items}
      </AnimatedScrollView>
    </>
  );
}
