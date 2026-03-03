import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { Colors } from "../../../constants/theme";

interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label?: string;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onValueChange,
  label,
  error,
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
        onPress={() => onValueChange(!value)}
      >
        <View
          style={[
            styles.checkbox,
            { borderColor: error ? "#FF3B30" : colors.tint },
            value && { backgroundColor: colors.tint },
          ]}
        >
          {value && <Ionicons name="checkmark" size={16} color="#fff" />}
        </View>
        {label && (
          <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        )}
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderRadius: 6,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 13,
    marginTop: 6,
    fontWeight: "500",
    marginLeft: 32,
  },
});
