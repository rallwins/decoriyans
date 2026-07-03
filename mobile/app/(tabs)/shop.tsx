import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { products, formatPrice } from "../../data/products";
import { CATEGORY_LABELS } from "../../types";

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.header}>{products.length} handcrafted items</Text>
        }
        renderItem={({ item }) => (
          <Link href={`/product/${item.slug}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.images[0] }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.artisan}>{item.artisan.name}</Text>
                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.category}>{CATEGORY_LABELS[item.category]}</Text>
                <Text style={styles.price}>{formatPrice(item.price)}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  list: { padding: 12 },
  header: { fontSize: 14, color: "#8f7d58", marginBottom: 12, paddingHorizontal: 4 },
  card: { flex: 1, margin: 6, backgroundColor: "#fff", borderRadius: 12, overflow: "hidden", borderWidth: 1, borderColor: "#e9e6db" },
  image: { width: "100%", aspectRatio: 1 },
  info: { padding: 10 },
  artisan: { fontSize: 11, color: "#8f7d58" },
  name: { fontSize: 13, fontWeight: "500", color: "#2e1c14", marginTop: 2 },
  category: { fontSize: 11, color: "#bbb08f", marginTop: 2 },
  price: { fontSize: 15, fontWeight: "700", color: "#9a6640", marginTop: 4 },
});
