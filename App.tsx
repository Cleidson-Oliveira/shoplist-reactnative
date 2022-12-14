import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
