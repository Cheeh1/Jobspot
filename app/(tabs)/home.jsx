import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView className="bg-white" contentContainerStyle={{height: "100%"}}>
      <View>
        <Text>Homepage</Text>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Home