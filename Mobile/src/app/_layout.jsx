import { ClerkProvider } from "@clerk/clerk-expo"
import { Slot } from "expo-router"
import { tokenCache } from '@clerk/expo/token-cache'
import { COLORS } from "../../constants/colors"
import SafeScreen from "../../components/SafeScreen"

export default function RootLayout() {
  return (
    <ClerkProvider 
  publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}

      tokenCache={tokenCache}
    >
      <SafeScreen style={{flex:1, backgroundColor: COLORS.background }}>
        <Slot/>
      </SafeScreen>
    </ClerkProvider>
  )
}