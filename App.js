import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import {useState} from 'react';
import ProductName,
  { ProductDesc as PD } // as chỉ áp dụng với component k default
  from "./src/screens/ProductName";
import ProductList from "./src/screens/ProductList";
// import { ProductDesc } from "./src/screens/ProductName";

export default function App() {
  // const [tên_state, tên_pt_cập_nhật_gt] = useState(gt mặc định)
  const [countState, setCountState] = useState(0);
  const [status, setStatus] = useState(false);

  // Phần xử lý logic
  let className = "CP17301123123123123";
  let username = "tuannda3";
  let age = 20;

  if (age > 20) {
    username = 'tuannda3 - Người lớn';
  } else {
    username = 'tuannda3 - Trẻ em';
  }

  function showData (label = '', value = '') {
    return label + ': ' + value;
  }
  // arrow function
  const arrowShowData = (label, value) => {
    return label + ': ' + value;
  }
  const arrowMiniShowData = (label, value) => (label + ': ' + value);
  // Tình huống tăng giá trị count khi bấm nút
  let count = 0;
  const plus = () => count++;

  // Ds truyền sang cho ProductList
  const list = [
    {id: 1, name: 'Bún bò huế', price: 50000},
    {id: 2, name: 'Bún trộn', price: 40000},
    {id: 3, name: 'Phở trộn', price: 35000},
    {id: 4, name: 'Phở trộn', price: 35000},
    {id: 5, name: 'Phở trộn', price: 35000},
    {id: 6, name: 'Phở trộn', price: 35000},
  ];

  return (
    // <ScrollView>
      <View style={styles.container}>
        <ProductList data={list} />

{/*
        <ProductName name={'Cơm niêu'}    />
        <PD desc={'Mô tả cơm niêu'} />
        <ProductName
          name={'Cơm rang'}
        />
        <ProductName
          name={'Hủ tiếu'}
          description={'Mô tả dùng trong PN Hủ tiếu'}
        />

        <Button
          // title={
          //   status
          //     ? 'Bấm để ẩn giao diện'
          //     : 'Bấm để hiện giao diện'
          // }
          title={`Bấm để ${status ? 'ẩn' : 'hiện'} giao diện`}
          onPress={() => setStatus(!status)}
        />
        {
          status
            ? <>
                <Text style={styles.text}>Count: {count}</Text>
                <Button
                  onPress={() => plus()}
                  title={'Bấm để tăng count'}
                  // onPress={plus}
                />
              </>
            : <Text>Không chỉnh sửa được</Text>
        }


        <Text style={styles.text}>CS: {countState}</Text>
        <Button
          title={'Bấm để tăng count'}
          onPress={() => setCountState(countState + 1)}
          // onPress={plus}
        />

        <Text style={styles.text}>{className}_RN!</Text>
        <Text style={styles.text}>
          {arrowShowData('Email', 'tuannda3@fe.edu.vn')}
        </Text>
        <Text style={styles.text}>
          {arrowMiniShowData('Địa chỉ', 'Hà Nội')}
        </Text> */}

        {/* Alt + Shift + Mũi tên xuống: Sao chép dòng */}
        {/* Ctrl + D: Bôi phần nội dung giống nhau */}
        {/* <StatusBar style="auto" /> */}
      </View>
    // </ScrollView>
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
