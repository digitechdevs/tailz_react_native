import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ title, loading, variant = 'primary', style, ...props }) => {
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isPrimary && styles.primary,
                isSecondary && styles.secondary,
                variant === 'outline' && styles.outline,
                (props.disabled || loading) && styles.disabled,
                style,
            ]}
            disabled={props.disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={isPrimary ? '#fff' : '#007AFF'} />
            ) : (
                <Text
                    style={[
                        styles.text,
                        isPrimary && styles.textLight,
                        (isSecondary || variant === 'outline') && styles.textDark,
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#E5E5EA',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    textLight: {
        color: '#fff',
    },
    textDark: {
        color: '#007AFF', // assuming dark is primary color for outline/secondary
    },
});
