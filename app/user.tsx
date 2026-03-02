import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCreateUser, useUsers } from '../src/features/user/hooks/use-user-queries';
import { useUserStore } from '../src/features/user/store/user-store';
import { User, userSchema } from '../src/features/user/validation/user-schema';
import { Button } from '../src/shared/components/Button';
import { ControlledInput } from '../src/shared/components/ControlledInput';

export default function UserScreen() {
    // 1. Zod + React Hook Form Setup
    const { control, handleSubmit, reset } = useForm<User>({
        resolver: zodResolver(userSchema),
        defaultValues: { name: '', email: '' },
    });

    // 2. React Query Setup
    const { data: users, isLoading, error } = useUsers();
    const createUserMutation = useCreateUser();

    // 3. Zustand Store Setup
    const { selectedUser, selectUser, clearSelection } = useUserStore();

    const onSubmit = (data: User) => {
        createUserMutation.mutate(data, {
            onSuccess: (newUser) => {
                Alert.alert('Success', `User ${newUser.name} created!`);
                reset(); // Clear form
                selectUser(newUser); // Save to global state via Zustand
            },
            onError: () => {
                Alert.alert('Error', 'Failed to create user.');
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Core Feature Demo</Text>

            {/* --- Form Section (Hook Form + Zod + Shared Components) --- */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Add New User</Text>
                <ControlledInput
                    name="name"
                    control={control}
                    label="Name"
                    placeholder="Enter full name"
                />
                <ControlledInput
                    name="email"
                    control={control}
                    label="Email"
                    placeholder="Enter email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Button
                    title="Create User"
                    onPress={handleSubmit(onSubmit)}
                    loading={createUserMutation.isPending}
                />
            </View>

            {/* --- Global State Demo (Zustand) --- */}
            {selectedUser && (
                <View style={[styles.card, styles.highlightCard]}>
                    <Text style={styles.sectionTitle}>Last Created User (Zustand State)</Text>
                    <Text>Name: {selectedUser.name}</Text>
                    <Text>Email: {selectedUser.email}</Text>
                    <Button
                        title="Clear State"
                        variant="outline"
                        onPress={clearSelection}
                        style={{ marginTop: 10 }}
                    />
                </View>
            )}

            {/* --- React Query Data Fetching Demo --- */}
            <View style={[styles.card, { flex: 1 }]}>
                <Text style={styles.sectionTitle}>User List (React Query)</Text>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#007AFF" />
                ) : error ? (
                    <Text style={{ color: 'red' }}>Error loading users.</Text>
                ) : (
                    <FlatList
                        data={users?.slice(0, 5) || []} // Show first 5 for demo
                        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.listName}>{item.name}</Text>
                                <Text style={styles.listEmail}>{item.email}</Text>
                            </View>
                        )}
                        ListEmptyComponent={<Text>No users available.</Text>}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F2F2F7',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#1C1C1E',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    highlightCard: {
        borderColor: '#007AFF',
        borderWidth: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        color: '#3A3A3C',
    },
    listItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    listName: {
        fontWeight: '600',
        fontSize: 16,
    },
    listEmail: {
        color: '#8E8E93',
        marginTop: 4,
    },
});
