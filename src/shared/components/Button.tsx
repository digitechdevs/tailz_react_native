import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    useColorScheme,
} from "react-native";
import { Colors } from "../../../constants/theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  loading,
  variant = "primary",
  style,
  ...props
}) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && { backgroundColor: colors.tint },
        isSecondary && {
          backgroundColor: colorScheme === "dark" ? "#333" : "#E5E5EA",
        },
        variant === "outline" && [styles.outline, { borderColor: colors.tint }],
        (props.disabled || loading) && styles.disabled,
        style,
      ]}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? "#fff" : colors.tint} />
      ) : (
        <Text
          style={[
            styles.text,
            isPrimary && styles.textLight,
            (isSecondary || variant === "outline") && {
              color:
                colorScheme === "dark" && isSecondary ? "#fff" : colors.tint,
            },
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
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    elevation: 0,
    shadowOpacity: 0,
  },
  disabled: {
    opacity: 0.6,
    elevation: 0,
    shadowOpacity: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  textLight: {
    color: "#fff",
  },
});
