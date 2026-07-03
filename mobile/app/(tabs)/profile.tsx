import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { SITE_CONFIG } from "../../types";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>{SITE_CONFIG.name}</Text>
        <Text style={styles.tagline}>{SITE_CONFIG.tagline}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.text}>
          Decoriyans is an artisan marketplace for hand-drafted treasures. Every piece is
          handcrafted by verified artisans from around the world.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${SITE_CONFIG.email}`)}>
          <Text style={styles.link}>{SITE_CONFIG.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`https://${SITE_CONFIG.domain}`)}>
          <Text style={styles.link}>{SITE_CONFIG.domain}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping</Text>
        <Text style={styles.text}>
          Free shipping on orders over ${SITE_CONFIG.shipping.freeThreshold}. Standard rate: ${SITE_CONFIG.shipping.standardRate}.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#faf7f2" },
  header: { backgroundColor: "#2e1c14", padding: 24, alignItems: "center" },
  logo: { color: "#faf7f2", fontSize: 28, fontWeight: "700" },
  tagline: { color: "#d4b896", marginTop: 4 },
  section: { padding: 20, borderBottomWidth: 1, borderBottomColor: "#e9e6db" },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: "#2e1c14", marginBottom: 8 },
  text: { color: "#63523c", lineHeight: 22 },
  link: { color: "#9a6640", fontSize: 16, marginBottom: 8 },
});
