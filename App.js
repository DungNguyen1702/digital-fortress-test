
import { StyleSheet, Text, View } from 'react-native';
import AllRoutes from './view/routes';

export default function App() {
  return (
    <View style={styles.container}>
       <AllRoutes></AllRoutes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
