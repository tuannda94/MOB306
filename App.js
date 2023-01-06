import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  // Phần xử lý logic
  let className = "CP17301123123123123";
  let username = "tuannda3";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>{className}_RN!</Text>
        <Text style={styles.text}>Email: {username}@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        <Text style={styles.text}>CP17301_RN!</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>Địa chỉ: HN</Text>
        <Text style={styles.text}>SĐT: 0392871868</Text>
        {/* Alt + Shift + Mũi tên xuống: Sao chép dòng */}
        {/* Ctrl + D: Bôi phần nội dung giống nhau */}
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
  },
  text: {
    color: "red",
    fontSize: 40,
  },
});
