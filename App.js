import { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <SWRConfig
        value={{
          refreshInterval: 0,
          fetcher: (...args) => fetch(...args).then(res => res.json()),
          suspense: true,
        }}
      >
        <Text style={styles.title}>People</Text>
        <Suspense fallback={<Text style={styles.title}>Loading</Text>}>
          <List />
        </Suspense>
      </SWRConfig>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 70,
    textAlign: 'center',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF7E9'
  }
});
