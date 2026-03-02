import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import ModalScreen from './modal';

const TEAM_MEMBERS = [
    { id: '1', name: 'Alice Smith', role: 'Project Manager' },
    { id: '2', name: 'Bob Johnson', role: 'Lead Developer' },
];

export default function TeamScreen() {
    const router = useRouter();

    return (
        <View style={{ margin: 20 }}>
            {/* <Text style={styles.title}>Team Members</Text>
            <FlatList
                data={TEAM_MEMBERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.role}>{item.role}</Text>
                    </View>
                )}
            /> */}
            {/* <View style={styles.buttonContainer}>
            </View> */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Team Screen</Text>
            <ModalScreen />
            <Button title="Go Back" onPress={() => router.back()} />

        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     card: {
//         backgroundColor: '#fff',
//         padding: 15,
//         borderRadius: 8,
//         marginBottom: 10,
//         elevation: 2,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: '600',
//     },
//     role: {
//         fontSize: 14,
//         color: '#666',
//         marginTop: 4,
//     },
//     buttonContainer: {
//         marginBottom: 10,
//     }
// });
