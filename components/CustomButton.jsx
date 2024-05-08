import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, backgroundColor, textColor, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${backgroundColor} py-4 rounded-xl`}
    >
      <Text className={`${textColor} text-center font-medium`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
