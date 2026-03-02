import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native 2</Text>
            <View style={styles.buttonContainer}>
                <Link href="/user" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Go to User Screen</Text>
                    </Pressable>
                </Link>
                <Link href="/team" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Go to Team Screen</Text>
                    </Pressable>
                </Link>
                <Link href="/modal" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Go to Modal Screen</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        gap: 15,
    },
    button: {
        backgroundColor: '#225cfaff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
