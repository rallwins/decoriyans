import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/products";

export default function CartScreen() {
  const { items, subtotal, shipping, total, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptyDesc}>Discover beautiful handcrafted treasures.</Text>
        <Link href="/shop" asChild>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Start Shopping</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.product.images[0] }} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.name}>{item.product.name}</Text>
              <Text style={styles.price}>{formatPrice(item.product.price)}</Text>
              <View style={styles.qtyRow}>
                <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity - 1)} style={styles.qtyBtn}>
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity + 1)} style={styles.qtyBtn}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.product.id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.summary}>
        <View style={styles.row}><Text>Subtotal</Text><Text>{formatPrice(subtotal)}</Text></View>
        <View style={styles.row}><Text>Shipping</Text><Text>{shipping === 0 ? "Free" : formatPrice(shipping)}</Text></View>
        <View style={[styles.row, styles.totalRow]}><Text style={styles.totalLabel}>Total</Text><Text style={styles.totalValue}>{formatPrice(total)}</Text></View>
        <Link href="/checkout" asChild>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  empty: { flex: 1, justifyContent: "center", alignItems: "center", padding: 32 },
  emptyTitle: { fontSize: 22, fontWeight: "700", color: "#2e1c14", marginBottom: 8 },
  emptyDesc: { color: "#8f7d58", marginBottom: 24 },
  cta: { backgroundColor: "#9a6640", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 10 },
  ctaText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  list: { padding: 16 },
  item: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: "#e9e6db", alignItems: "center" },
  image: { width: 72, height: 72, borderRadius: 8 },
  itemInfo: { flex: 1, marginLeft: 12 },
  name: { fontWeight: "500", color: "#2e1c14" },
  price: { color: "#9a6640", fontWeight: "600", marginTop: 4 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 8, gap: 12 },
  qtyBtn: { width: 28, height: 28, borderRadius: 6, backgroundColor: "#f3ebe0", alignItems: "center", justifyContent: "center" },
  qtyBtnText: { fontSize: 16, fontWeight: "600", color: "#7f5136" },
  qty: { fontWeight: "600" },
  remove: { color: "#c44", fontSize: 12 },
  summary: { backgroundColor: "#fff", padding: 20, borderTopWidth: 1, borderTopColor: "#e9e6db" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  totalRow: { borderTopWidth: 1, borderTopColor: "#e9e6db", paddingTop: 12, marginTop: 4 },
  totalLabel: { fontWeight: "700", fontSize: 16 },
  totalValue: { fontWeight: "700", fontSize: 16, color: "#9a6640" },
  checkoutBtn: { backgroundColor: "#9a6640", paddingVertical: 16, borderRadius: 10, marginTop: 16, alignItems: "center" },
  checkoutText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
