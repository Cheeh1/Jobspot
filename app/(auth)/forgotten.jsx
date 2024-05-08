import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";

const Forgotten = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 py-12 px-5 bg-white">
          <View className="flex gap-10">
            <View className="flex items-center gap-3">
              <Text className="text-3xl text-primary font-semibold">
                Forgot Password?
              </Text>
              <Text className="text-[#524B6B] text-sm text-center">
                To reset your password, you need your email that can be
                authenticated
              </Text>
            </View>
            <View className="flex items-center">
              <Image source={require("../../assets/icons/forgotten.png")} />
            </View>
          </View>

          <View className="flex pt-5 gap-5">
            <View className="flex gap-2">
              <Text className="text-primary font-semibold">Email</Text>
              <TextInput
                className="bg-white shadow-sm shadow-black h-14 placeholder:text-[#0D0140] px-3 rounded-md"
                placeholder="Brandonelouis@gmail.com"
                placeholderTextColor="rgba(13, 1, 64, 0.6)"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            <View className="flex gap-5">
              <View>
                <CustomButton
                  backgroundColor="bg-primary"
                  title="RESET PASSWORD"
                  textColor="text-white"
                  handlePress={() => router.push("/checkEmail")}
                />
              </View>
              <View className="">
                <CustomButton
                  backgroundColor="bg-lightPurple"
                  title="BACK TO LOGIN"
                  textColor="text-primary"
                  handlePress={() => router.push("/sign-in")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgotten;
