import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Phần code logic:
  let name = "NDAT";

  return (
    <View style={styles.container}>
      {/* Đưa giá trị biến vào trong cặp ngoặc nhọn {} */}
      <Text style={styles.text}> {name} - PH12345</Text>
      <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
      <Text style={styles.text}>SĐT: 0392871868</Text>
      {/* Alt + Shift + Mũi tên xuống: để sao chép dòng */}
      {/* Ctrl + D: Bôi vào những phần nội dung giống nhau */}
      {/* Ctrl + X: Nếu không bôi văn bản thì sẽ xoá cả dòng */}
      <StatusBar style="auto" />
    </View>
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
    // tên của phần thay đổi giao diện
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
  },
});
