import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex py-5 px-5 bg-white">
          <Text className="text-[#130160] font-bold text-3xl text-center">
            Jobspot
          </Text>
          <View className="flex items-center">
            <Image
              className="w-64"
              source={require("../assets/startpage.png")}
              resizeMode="contain"
            />
          </View>
          <View className="flex gap-4">
            <View className="flex gap-2">
              <Text className="text-3xl w-48 text-[#130160]  font-bold">
                Find Your{" "}
                <Text className="text-[#FCA34D] underline">Dream Job</Text>{" "}
                Here!
              </Text>

              <Text className="text-[#24185d]  tracking-widest font-medium text-sm w-64">
                Explore all the most exciting job roles based on your interest
                and study major.
              </Text>
            </View>
            <View className="flex items-end">
              <TouchableOpacity
                onPress={() => router.push("/sign-in")}
                className="bg-[#130160] w-14 py-3 px-3 rounded-2xl"
              >
                <Image
                  className="ml-0.5"
                  source={require("../assets/arrow.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar backgroundColor="#ffff" style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
