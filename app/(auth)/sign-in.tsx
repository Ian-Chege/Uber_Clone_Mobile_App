import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Sign Up</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
