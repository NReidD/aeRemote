
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';


// Replace with your server IP or hostname (your SSH server)
const SERVER_IP = '108.2.142.216';
import { Platform } from 'react-native';
// Compose API base URL pointing to proxy server port + /api
const API_BASE_URL = Platform.select({
  ios: `http://${SERVER_IP}:19000/api`,
  android: `http://${SERVER_IP}:19000/api`,
  default: `http://localhost:19000/api`,
});
export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://0.0.0.0:2999/api/hello');
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
