import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import {useState} from 'react';

export default function App() {
  // - state là 1 thành phần cung cấp bởi react
  //    giúp tạo ra 1 biến lưu giữ giá trị, khi nó thay đổi giá trị sẽ
  //    render lại màn hình
  // - state sẽ chỉ có tác dụng ở trong function này
  //    nghĩa là khi thay đổi nó chỉ render lại view đang chứa nó

  // const [tên_state, tên_pt_thay_đổi_gt_bên_trái] = useState(gt mặc định);
  const [countState, setCountState] = useState(0);
  const [switchState, setSwitchState] = useState(true);

  // Phần code logic:
  let name = 'NDAT';
  let address = 'Hà Nội';
  let age = 20;

  if (age > 20) {
    name = 'NDAT - Người lớn';
  } else {
    name = 'NDAT - Trẻ con';
  }

  function showContent(label, value) {
    return label + ': ' + value;
  }
  // chuyển hàm này thành dạng arrow function
  const arrowShowContent = (label, value) => {
    return label + ':'+ value;
  }
  // sau => là ngoặc tròn hoặc không có ngoặc thì đây chính là
  // kq của return;
  const arrowMiniShowContent = (label, value) => (label + ':' + value);

  // Sự kiện tăng giá trị của 1 số
  let count = 0;
  const tangCount = () => count++;

  return (
    <ScrollView>
      <View style={styles.container}>
      {
        switchState
        ? <>
            <Text style={styles.text}>Count: {count}</Text>
            <Button
              title={"Bấm để tăng count"}
              onPress={() => tangCount()}
            />
          </>
        : null
      }

        <Text style={styles.text}>CountState: {countState}</Text>
        {/* Nếu dùng thêm Button thì phải import từ react-native trước */}
        <Button
          title={"Bấm để tăng countState"}
          onPress={() => setCountState(countState + 1)}
        />
        <Button
          title={"Bấm để ẩn giao diện"}
          onPress={() => setSwitchState(!switchState)}
        />





        <Text style={styles.text}>
          {arrowShowContent('Tên', name)}
        </Text>
        <Text style={styles.text}>
          {arrowMiniShowContent('Địa chỉ', address)}
        </Text>
        <Text style={styles.text}>
          {showContent('Email', 'tuannda3@fe.edu.vn')}
        </Text>
        <Text style={styles.text}>
          {showContent('SDT', '0392871868')}
        </Text>
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
