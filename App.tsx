import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';

export default function App() {
  const handleFormSubmit = (formData: any) => {
    // console.log('Form data submitted:', formData);
  }

  return (
    <View style={styles.container}>
      <Form onFormSubmit={handleFormSubmit} showUsername={true} showEmail={true} showPassword={true} showConfirmPassword={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
