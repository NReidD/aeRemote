
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('127.0.0.1:2999/api/hello');
      const data = await response.json();
      setMessage(data.message);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
