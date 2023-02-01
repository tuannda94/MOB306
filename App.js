import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  FlatList
} from "react-native";
import {useState} from 'react';

export default function App() {
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
  const [nameValue, setNameValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);

  const handleAdd = () => {
    // Khi bam Luu se goi ham nay
    // 1. Dinh nghia object moi se duoc them vao mang du lieu
    const newItem = {
      id: productList[productList.length - 1].id + 1,
      name: nameValue,
      price: priceValue
    };
    // 2. Them phan tu moi vao mang sau do cap nhat lai ds
    // ... se lay ra toan bo phan tu cua mang, sau do ghep cung phan tu moi
    const newProductList = [...productList, newItem];
    // 3. Cap nhat ds moi de hien thi
    setProductList(newProductList);
    // 4. Cap nhat input ve ds mac dinh va dong modal
    setNameValue(''); setPriceValue(0); setShowAdd(false);
  };

  return (
    <View style={styles.container}>
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
          <Button title="Huy" onPress={() => setShowAdd(false)} />
          <Button title="Luu" onPress={() => handleAdd()}/>
        </View>
      </Modal>
      <FlatList
        data={productList}
        renderItem={({item}) => <View>
          <Text>Ten SP: {item.name}</Text>
          <Text>Gia SP: {item.price} VND</Text>
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
