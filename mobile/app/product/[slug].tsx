import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getProductBySlug, formatPrice } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? "");
  const { addItem } = useCart();
  const router = useRouter();

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handleAdd = () => {
    addItem(product);
    Alert.alert("Added to Cart", `${product.name} has been added to your cart.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.artisan}>by {product.artisan.name} · {product.artisan.location}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.rating}>★ {product.rating} ({product.reviewCount} reviews)</Text>
        <Text style={styles.price}>{formatPrice(product.price)}</Text>
        <Text style={styles.desc}>{product.description}</Text>

        <View style={styles.materials}>
          {product.materials.map((m) => (
            <View key={m} style={styles.tag}>
              <Text style={styles.tagText}>{m}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.addBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", aspectRatio: 1 },
  content: { padding: 20 },
  artisan: { color: "#9a6640", fontSize: 13 },
  name: { fontSize: 24, fontWeight: "700", color: "#2e1c14", marginTop: 4 },
  rating: { color: "#8f7d58", marginTop: 8 },
  price: { fontSize: 28, fontWeight: "700", color: "#9a6640", marginTop: 12 },
  desc: { color: "#63523c", lineHeight: 22, marginTop: 16 },
  materials: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 16 },
  tag: { backgroundColor: "#f3ebe0", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  tagText: { fontSize: 12, color: "#7f5136" },
  addBtn: { backgroundColor: "#9a6640", paddingVertical: 16, borderRadius: 10, alignItems: "center", marginTop: 24 },
  addBtnText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
