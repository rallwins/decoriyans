import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { getFeaturedProducts } from "../../data/products";
import { SITE_CONFIG } from "../../types";

export default function HomeScreen() {
  const featured = getFeaturedProducts();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTag}>Artisan Marketplace</Text>
        <Text style={styles.heroTitle}>{SITE_CONFIG.tagline}</Text>
        <Text style={styles.heroDesc}>
          Discover one-of-a-kind hand-drafted treasures from skilled artisans worldwide.
        </Text>
        <Link href="/shop" asChild>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Explore Collection</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Treasures</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featured.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={{ uri: product.images[0] }} style={styles.cardImage} />
                <Text style={styles.cardName} numberOfLines={2}>{product.name}</Text>
                <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>

      <View style={styles.trustRow}>
        {["100% Handmade", "Free Shipping $75+", "Artisan Verified"].map((label) => (
          <View key={label} style={styles.trustBadge}>
            <Text style={styles.trustText}>{label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  hero: { backgroundColor: "#2e1c14", padding: 24, paddingTop: 16 },
  heroTag: { color: "#d4b896", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 },
  heroTitle: { color: "#faf7f2", fontSize: 28, fontWeight: "700", marginBottom: 12 },
  heroDesc: { color: "#e5d4bc", fontSize: 15, lineHeight: 22, marginBottom: 20 },
  ctaButton: { backgroundColor: "#faf7f2", paddingVertical: 14, paddingHorizontal: 24, borderRadius: 10, alignSelf: "flex-start" },
  ctaText: { color: "#2e1c14", fontWeight: "600", fontSize: 16 },
  section: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: "#2e1c14", marginBottom: 16 },
  card: { width: 160, marginRight: 12, backgroundColor: "#fff", borderRadius: 12, overflow: "hidden", borderWidth: 1, borderColor: "#e9e6db" },
  cardImage: { width: 160, height: 160 },
  cardName: { padding: 10, fontSize: 13, fontWeight: "500", color: "#483b31" },
  cardPrice: { paddingHorizontal: 10, paddingBottom: 10, fontSize: 16, fontWeight: "700", color: "#9a6640" },
  trustRow: { flexDirection: "row", flexWrap: "wrap", padding: 20, gap: 8, paddingTop: 0 },
  trustBadge: { backgroundColor: "#f3ebe0", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
  trustText: { fontSize: 12, color: "#7f5136", fontWeight: "500" },
});
