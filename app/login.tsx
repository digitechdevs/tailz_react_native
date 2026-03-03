import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "../constants/theme";
import { useLoginMutation } from "../src/features/user/hooks/useLogin";
import {
  LoginFormData,
  loginSchema,
} from "../src/features/user/validation/login";
import { Button } from "../src/shared/components/Button";
import { ControlledCheckbox } from "../src/shared/components/ControlledCheckbox";
import { ControlledInput } from "../src/shared/components/ControlledInput";

export default function LoginScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const { mutate: login, isPending } = useLoginMutation();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      companyEmail: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onError: (error: any) => {
        Alert.alert(
          "Login Failed",
          error?.response?.data?.message ||
            "Something went wrong while trying to login.",
        );
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        centerContent
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.logo} source={require("../public/logo.png")} />

        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              Welcome Back
            </Text>
            <Text style={[styles.subtitle, { color: colors.icon }]}>
              Please sign in to your account
            </Text>
          </View>

          <ControlledInput
            name="email"
            control={control}
            label="Email Address"
            placeholder="you@domain.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <ControlledInput
            name="password"
            control={control}
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
          />

          <ControlledInput
            name="companyEmail"
            control={control}
            label="Company Email (optional)"
            placeholder="contact@company.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.optionsRow}>
            <ControlledCheckbox
              name="rememberMe"
              control={control}
              label="Remember me"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Sign In"
              onPress={handleSubmit(onSubmit)}
              loading={isPending}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 4,
  },
  buttonContainer: {
    gap: 16,
    marginTop: 12,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 24,
    // backgroundColor: "#f37973ff",
    borderRadius: 12,
  },
});
