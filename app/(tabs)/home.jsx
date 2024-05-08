import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-white flex gap-12 py-5 px-5">
          <View className="flex flex-row justify-between">
            <View className="flex">
              <Text className="text-xl font-semibold text-primary">Hello</Text>
              <Text className="text-xl -mt-1 font-semibold text-primary">
                Divine Edwin.
              </Text>
            </View>
            <Image
              resizeMode="contain"
              className="w-6"
              source={require("../../assets/icons/profile.png")}
            />
          </View>

          <View className="relative flex flex-row bg-primary px-5 py-8 rounded-xl">
            <View className="flex gap-5">
              <Text className="text-white w-20 font-extrabold">
                50% <Text className="font-normal">off any courses.</Text>{" "}
              </Text>
              <TouchableOpacity className="bg-secondary w-20 rounded-md py-1">
                <Text className="font-medium text-white text-[12px] text-center">
                  Join Now
                </Text>
              </TouchableOpacity>
            </View>
            <View className="absolute right-0 bottom-5">
              <Image source={require("../../assets/images/lady.png")} />
            </View>
          </View>

          <View className="">
            <Text className="font-semibold text-lg">Find Your Job</Text>
            <View className="flex pt-7 flex-row gap-6 items-center">
              <View className="flex gap-1 bg-[#AFECFE] items-center py-12 px-9 rounded-lg">
                <Image source={require("../../assets/icons/headhunting.png")} />
                <Text className="font-bold">44.5k</Text>
                <Text className="">Remote Job</Text>
              </View>
              <View className="flex">
                <View className="bg-[#BEAFFE] items-center gap-1 flex py-4 px-10 rounded-lg">
                  <Text className="font-bold">66.8k</Text>
                  <Text>Full Time</Text>
                </View>
                <View className="flex gap-1 bg-[#FFD6AD] mt-5 items-center py-4 px-10 rounded-lg">
                  <Text className="font-bold">38.9k</Text>
                  <Text>Part Time</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="">
            <Text className="text-lg font-semibold">
              Recent Job List
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
