import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/products";

export default function CheckoutScreen() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  const handleOrder = () => {
    if (!name || !email) {
      Alert.alert("Required", "Please fill in your name and email.");
      return;
    }
    const orderId = `DEC-${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    Alert.alert("Order Confirmed!", `Thank you! Order ID: ${orderId}`, [
      { text: "OK", onPress: () => router.replace("/") },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Your name" />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="you@email.com" keyboardType="email-address" />
      </View>

      <View style={styles.summary}>
        {items.map(({ product, quantity }) => (
          <View key={product.id} style={styles.row}>
            <Text style={styles.itemName}>{product.name} × {quantity}</Text>
            <Text>{formatPrice(product.price * quantity)}</Text>
          </View>
        ))}
        <View style={styles.row}><Text>Subtotal</Text><Text>{formatPrice(subtotal)}</Text></View>
        <View style={styles.row}><Text>Shipping</Text><Text>{shipping === 0 ? "Free" : formatPrice(shipping)}</Text></View>
        <View style={[styles.row, styles.total]}><Text style={styles.totalLabel}>Total</Text><Text style={styles.totalValue}>{formatPrice(total)}</Text></View>
      </View>

      <TouchableOpacity style={styles.orderBtn} onPress={handleOrder}>
        <Text style={styles.orderText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2", padding: 16 },
  section: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: "#e9e6db" },
  label: { fontWeight: "500", color: "#483b31", marginBottom: 6, marginTop: 12 },
  input: { borderWidth: 1, borderColor: "#e9e6db", borderRadius: 8, padding: 12, fontSize: 16 },
  summary: { backgroundColor: "#fff", borderRadius: 12, padding: 16, borderWidth: 1, borderColor: "#e9e6db" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  itemName: { flex: 1, marginRight: 8, color: "#63523c" },
  total: { borderTopWidth: 1, borderTopColor: "#e9e6db", paddingTop: 12, marginTop: 4 },
  totalLabel: { fontWeight: "700", fontSize: 16 },
  totalValue: { fontWeight: "700", fontSize: 16, color: "#9a6640" },
  orderBtn: { backgroundColor: "#9a6640", paddingVertical: 16, borderRadius: 10, alignItems: "center", marginTop: 20, marginBottom: 32 },
  orderText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
