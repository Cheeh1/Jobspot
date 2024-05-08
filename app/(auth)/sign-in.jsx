import { useState } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 bg-[#fbfbfb] py-12 pr-5">
          <View className="flex items-center gap-3">
            <Text className="text-3xl text-primary font-semibold">
              Welcome Back
            </Text>
            <Text className="text-[#524B6B] text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Text>
          </View>
          <View className="flex gap-3">
            <View className="flex gap-3">
              <View className="flex gap-2">
                <Text className="text-primary font-semibold">Email</Text>
                <TextInput
                  className="bg-white shadow-sm shadow-black h-14 placeholder:text-[#0D0140] px-3 rounded-md"
                  placeholder="Brandonelouis@gmail.com"
                  placeholderTextColor="rgba(13, 1, 64, 0.6)"
                  value={form.email}
                  onChangeText={(value) => handleInputChange(value, "email")}
                  keyboardType="email-address"
                />
              </View>
              <View className="flex gap-1 relative">
                <View className="flex gap-2">
                  <Text className="text-primary font-semibold">Password</Text>
                  <TextInput
                    className="bg-white shadow-sm shadow-black h-14 placeholder:text-[#0D0140] px-3 rounded-md"
                    placeholder="*********"
                    value={form.password}
                    onChangeText={(value) =>
                      handleInputChange(value, "password")
                    }
                    placeholderTextColor="rgba(13, 1, 64, 0.6)"
                    secureTextEntry={!showPassword}
                  />

                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10"
                  >
                    <Image
                      className=""
                      source={
                        !showPassword
                          ? require("../../assets/icons/iconeye.png")
                          : require("../../assets/icons/eye.png")
                      }
                    />
                  </TouchableOpacity>
                </View>

                <Link
                  href="/forgotten"
                  className="text-right text-[12px] text-primary"
                >
                  Forgot password?
                </Link>
              </View>
            </View>
            <View className="flex gap-5">
              <View>
                <CustomButton
                  backgroundColor="bg-primary"
                  title="LOGIN"
                  textColor="text-white"
                  handlePress=""
                />
              </View>
              <View className="relative">
                <Image
                  className="absolute left-14 top-4 z-10"
                  source={require("../../assets/icons/google.png")}
                />

                <CustomButton
                  backgroundColor="bg-lightPurple"
                  title="SIGN IN WITH GOOGLE"
                  textColor="text-primary"
                  handlePress=""
                />
              </View>
              <View className="flex flex-row justify-center">
                <Text className="text-[#524B6B] text-[12px]">
                  You don't have an account yet?{" "}
                </Text>
                <Link href="/sign-up" className="text-secondary text-[12px]">
                  Sign up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
