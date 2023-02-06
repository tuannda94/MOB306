import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  FlatList,
  Pressable
} from "react-native";
import {useState} from 'react';

export default function App(props) {
  const route = props.route;
  const nameChuyenMH = route.params.name;
  const data = [
    {
      id: 1,
      name: 'Iphone 11',
      price: 11000000,
    },
    {
      id: 2,
      name: 'Iphone 12',
      price: 12000000,
    },
  ];
  // De danh sach render lai khi co du lieu moi thi can 1 ds dang state
  const [productList, setProductList] = useState(data);
  const [isShowAdd, setShowAdd] = useState(false);
  const [editId, setEditId] = useState(0);
  const [nameValue, setNameValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);

  const handleClose = () => {
    setNameValue(''); setPriceValue(0); setEditId(0);
    setShowAdd(false);
  }

  const handleAdd = () => {
    // Nếu có editId thì là đang sửa và cần cập nhật pt
    if (editId) {
      const newEditProductList = [...productList];
      for (let i = 0; i < newEditProductList.length; i++) {
        if (newEditProductList[i].id == editId) {
          newEditProductList[i].name = nameValue;
          newEditProductList[i].price = priceValue;
        }
      }
      setProductList(newEditProductList);
      return handleClose();
    }

    // Khi bam Luu se goi ham nay
    // 1. Dinh nghia object moi se duoc them vao mang du lieu
    const newItem = {
      id: productList.length == 0
        ? 1
        : productList[productList.length - 1].id + 1,
      name: nameValue,
      price: priceValue
    };
    // 2. Them phan tu moi vao mang sau do cap nhat lai ds
    // ... se lay ra toan bo phan tu cua mang, sau do ghep cung phan tu moi
    const newProductList = [...productList, newItem];
    // 3. Cap nhat ds moi de hien thi
    setProductList(newProductList);
    // 4. Cap nhat input ve ds mac dinh va dong modal
    return handleClose();
  };

  const handleDelete = (deleteId) => {
    const newProductList = productList
      .filter(item => item.id !== deleteId);
    setProductList(newProductList);
  };

  // Hàm Sửa Chạy khi bấm nút sửa ở từng phần tử
  const handleEdit = (editId) => {
    // 1. Hiển thị modal lên
    setShowAdd(true);
    // 2. Truyền giá trị cần sửa vào TextInput
    const editItem = productList
      .find(item => item.id == editId);
    setNameValue(editItem.name);
    setPriceValue(editItem.price);
    setEditId(editItem.id);
  };

  return (
    <View style={styles.container}>
      <Text>ND lấy từ Home: {nameChuyenMH}</Text>
      {isShowAdd
        ? null
        : <Button title="Them moi" onPress={() => setShowAdd(true)} />
      }
      {/* visible cua Modal se the hien trang thai an hien */}
      {/* Thay the cho cach dung toan tu 3 ngoi de an hien giao dien */}
      <Modal visible={isShowAdd} animationType="slide">
        <View>
          <Text>{nameValue}</Text>
          <TextInput placeholder="Ten san pham"
            value={nameValue}
            onChangeText={(text) => setNameValue(text)}
          />
          <TextInput placeholder="Gia san pham" keyboardType="numeric"
            value={priceValue}
            onChangeText={(text) => setPriceValue(text)}
          />
          <Button title="Huy" onPress={() => handleClose()} />
          <Button title="Luu" onPress={() => handleAdd()}/>
        </View>
      </Modal>
      <FlatList
        data={productList}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>Ten SP: {item.name}</Text>
          <Text>Gia SP: {item.price} VND</Text>
          <Pressable onPress={() => handleEdit(item.id)}>
            <Text>Sua</Text>
          </Pressable>
          <Pressable onPress={() => handleDelete(item.id)}>
            <Text>Xoa</Text>
          </Pressable>
        </View>}
        keyExtractor={(item) => item.id}
      />
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
