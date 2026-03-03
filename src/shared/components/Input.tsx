import React, { forwardRef } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    useColorScheme,
} from "react-native";
import { Colors } from "../../../constants/theme";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, style, ...props }, ref) => {
    const colorScheme = useColorScheme() ?? "light";
    const colors = Colors[colorScheme];

    return (
      <View style={styles.container}>
        {label && (
          <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        )}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            {
              color: colors.text,
              backgroundColor: colors.background,
              borderColor: error ? "#FF3B30" : colors.icon,
            },
            style,
          ]}
          placeholderTextColor={colors.icon}
          {...props}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 13,
    marginTop: 6,
    fontWeight: "500",
  },
});
