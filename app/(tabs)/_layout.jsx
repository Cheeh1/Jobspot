import { Image } from "react-native";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0D0140",
        tabBarInactiveTintColor: "#A49EB5",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 10
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              color={color}
              source={require("../../assets/icons/Home.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              color={color}
              focused={focused}
              source={require("../../assets/icons/Connection.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image
              color={color}
              focused={focused}
              source={require("../../assets/icons/Save.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
