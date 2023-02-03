import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
  Button,
  Pressable
} from 'react-native';
import {useState} from 'react';

const App = () => {
  const [isShowForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [editId, setEditId] = useState(0);
  const [list, setList] = useState([]);

  const onClose = () => {
    setShowForm(false); setName(''); setPrice(0);
    setEditId(0);
  }

  const onSave = () => {
    // 0. Nếu có editId != 0 thì là đang chỉnh sửa
    if (editId != 0) {
      const newEditList = list.map(item => {
        if (item.id == editId) {
          // Gán gt mới = gt đã lưu ở state sau khi nhập
          item.name = name;
          item.price = price;
        }
        return item;
      });
      setList(newEditList);
      return onClose();
    }
    // 1. Cau truc du lieu obj moi de luu
    const newItem = {
      id: list[list.length - 1]?.id + 1 || 1,
      name: name,
      price: price
    };
    // 2. Dinh nghia mang du lieu moi roi luu
    const newList = [...list, newItem];
    setList(newList);
    // 3. Dong modal va dua TextInput ve gia tri mac dinh
    return onClose();
  };

  const onDelete = (itemId) => {
    const newList = list.filter((item) => {
      return item.id !== itemId;
    });
    setList(newList);
  };

  const onEdit = (editId) => {
    // 1. Mở modal ra
    setShowForm(true);
    // 2. Tìm kiếm phần tử có id = editId
    const editItem = list.find(item => item.id == editId);
    // 3. Hiển thị dữ liệu của phần tử vừa tìm được
    setName(editItem.name);
    setPrice(editItem.price);
    setEditId(editId); // setEditId(editItem.id);
  };

  return (
    <View>
      {isShowForm ? null : <Button title='Them moi'
        onPress={() => setShowForm(true)}
      />}
      <Modal visible={isShowForm} animationType="slide">
        <View>
          <Text>{name} - {price}</Text>
          <TextInput placeholder='Ten SP'
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput placeholder='Gia SP' keyboardType='numeric'
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
          <Button title='Huy'
            onPress={() => onClose()}
          />
          <Button title='Luu' onPress={() => onSave()} />
        </View>
      </Modal>
      <View>
        <FlatList
          data={list}
          renderItem={({item}) => <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Pressable onPress={() => onEdit(item.id)}>
              <Text>Sua</Text>
            </Pressable>
            <Pressable onPress={() => onDelete(item.id)}>
              <Text>Xoa</Text>
            </Pressable>
          </View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default App;
