import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import {useState} from 'react';

export default function App() {
  // const [tên_state, tên_pt_thay_đổi_gt_cho_state] = useState(gt mặc định);
  const [countState, setCountState] = useState(0);
  const [isShow, setShow] = useState(true);

  // Phần viết code logic
  let name = "Nguyễn Đức Anh Tuấn";
  let email = "tuannda3@fe.edu.vn";
  let age = 20;

  if (age > 20) {
    name = "NDAT - Người lớn";
  } else {
    name = 'NDAT - Trẻ con';
  }

  function showData (label, value) {
    return label + ': ' + value;
  }
  const arrowShowData = (label, value) => {
    return label + ': ' + value;
  }
  // Nếu không có thêm logic gì ngoài return, có thể bỏ ngoặc nhọn
  // và chữ return
  const arrowMiniShowData = (label, value) => (label + ': ' + value);

  // Ví dụ về việc cập nhật hiển thị 1 giá trị count
  let count = 0;
  const tangCount = () => count++;

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          isShow
            ? <>
              <Text style={styles.text}>Count: {count}</Text>
              <Button
                title={'Bấm để tăng gt count'}
                onPress={() => tangCount()}
              />
            </>
            : null
        }

        <Text style={styles.text}>Count state: {countState}</Text>
        <Button
          title={'Bấm để tăng gt count'}
          onPress={() => setCountState(countState + 1)}
        />
        <Button
          title={'Bấm để ẩn hiện giao diện'}
          onPress={() => setShow(!isShow)}
        />







        <Text style={styles.text}>
          {showData('Tên', name)}
        </Text>
        <Text style={styles.text}>
          {arrowShowData('Email', email)}
        </Text>
        <Text style={styles.text}>
          {arrowMiniShowData('Địa chỉ', 'Hà Nội')}
        </Text>
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
