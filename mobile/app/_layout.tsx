import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#2e1c14" },
          headerTintColor: "#faf7f2",
          headerTitleStyle: { fontWeight: "600" },
          contentStyle: { backgroundColor: "#faf7f2" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[slug]" options={{ title: "Product" }} />
        <Stack.Screen name="checkout" options={{ title: "Checkout" }} />
      </Stack>
    </CartProvider>
  );
}
