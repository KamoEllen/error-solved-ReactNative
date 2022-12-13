import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const ErrorMessage = () => {
  return (
    <ScrollView>
      <View style={{ width: 300, height: 200 }}>
        <Text numberOfLines={10} ellipsizeMode="tail">
          This is a very long and verbose error message that extends beyond the
          screen and will not fit within the bounds of the defined width and
          height of the component.This is a very long and verbose error message that extends beyond the
          screen and will not fit within the bounds of the defined width and
          height of the component.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ErrorMessage;
