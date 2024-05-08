import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Successful = () => {
  return (
    <SafeAreaView>
      <ScrollView
        className="flex pt-12 px-5"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className="flex gap-10">
          <View className="flex items-center gap-3">
            <Text className="text-3xl text-primary font-semibold">
              Successfully
            </Text>
            <Text className="text-[#524B6B] text-sm text-center">
              Your password has been updated, please change your password
              regularly to avoid this happening
            </Text>
          </View>
          <View className="flex items-center">
            <Image source={require("../../assets/icons/successful.png")} />
          </View>
        </View>

        <View className="flex pt-20">
          <View className="flex gap-5">
            <View>
              <CustomButton
                backgroundColor="bg-primary"
                title="CONTINUE"
                textColor="text-white"
                handlePress={() => router.push("/home")}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Successful;
