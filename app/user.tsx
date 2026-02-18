import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function UserScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>New User</Text>
            </View>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 60,
    },
    value: {
        flex: 1,
    },
});
