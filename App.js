import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  // Phần viết code logic
  let name = "Nguyễn Đức Anh Tuấn";
  let email = "tuannda3@fe.edu.vn";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        {/* Alt + Shift + Mũi tên xuống: Sao chép dòng */}
        {/* Ctrl + D: Bôi những phần nội dung tương tự */}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "red",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
