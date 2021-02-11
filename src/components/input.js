import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({...rest}) => {
  return <TextInput ref={rest.inputRef} {...rest} style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1.3,
    borderBottomColor: '#a6a6a6',
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
  },
});
