import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={{ padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>component is calling</Text>
      <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, width: '100%', flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, width: '46%', textAlign: 'center', backgroundColor: 'blue' }}>one</Text>
        <Text style={{ color: 'white', fontSize: 20, width: '46%', textAlign: 'center', backgroundColor: 'green' }}>Two</Text>
      </View>
    </View>
  );
}

