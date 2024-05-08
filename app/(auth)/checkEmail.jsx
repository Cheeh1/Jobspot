import { View, Text, ScrollView, Image, Linking, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router, Link } from "expo-router";

const CheckEmail = () => {
    // Function to handle the "open your email" button
  const handleOpenGmailApp = async () => {
    const gmailAppUrl = "googlemail://";
    const gmailWebUrl = "https://mail.google.com";
    try {
      const canOpenGmailApp = await Linking.canOpenURL(gmailAppUrl);

      if (canOpenGmailApp) {
        await Linking.openURL(gmailAppUrl);
      } else {
        const canOpenWebUrl = await Linking.canOpenURL(gmailWebUrl);

        if (canOpenWebUrl) {
          await Linking.openURL(gmailWebUrl);
        } else {
          Alert.alert("Oopss", "Unable to open Gmail app and website");
        }
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred:" + error.message);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        className="flex pt-12 px-5"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className="flex gap-10">
          <View className="flex items-center gap-3">
            <Text className="text-3xl text-primary font-semibold">
              Check Your Email
            </Text>
            <Text className="text-[#524B6B] text-sm text-center">
              We have sent the reset password to the email address
            </Text>
          </View>
          <View className="flex items-center">
            <Image source={require("../../assets/icons/emailsent.png")} />
          </View>
        </View>

        <View className="flex pt-20">
          <View className="flex gap-5">
            <View>
              <CustomButton
                backgroundColor="bg-primary"
                title="OPEN YOUR EMAIL"
                textColor="text-white"
                handlePress={handleOpenGmailApp}
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
          <View className="flex flex-row justify-center gap-1 pt-5">
            <Text className="text-primary text-[12px]">
              You have not received the email?
            </Text>
            <Link href="/forgotten" className="text-secondary text-[12px] underline">
              Resend
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckEmail;
