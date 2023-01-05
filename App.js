import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Nguyễn Đức Anh Tuấn - PH12345!</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>SDT: 0392871868</Text>
        <Text style={styles.text}>Nguyễn Đức Anh Tuấn - PH12345!</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>SDT: 0392871868</Text>
        <Text style={styles.text}>Nguyễn Đức Anh Tuấn - PH12345!</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>SDT: 0392871868</Text>
        <Text style={styles.text}>Nguyễn Đức Anh Tuấn - PH12345!</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>SDT: 0392871868</Text>
        <Text style={styles.text}>Nguyễn Đức Anh Tuấn - PH12345!</Text>
        <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
        <Text style={styles.text}>Email: tuannda3@fe.edu.vn</Text>
        <Text style={styles.text}>SDT: 0392871868</Text>
        {/* Alt + Shift + Mũi tên xuống */}
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
    // nếu dùng sẽ là styles.text
    color: "red",
    fontSize: 30,
  },
});
