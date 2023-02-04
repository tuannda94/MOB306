import { useState } from 'react';
import {
  View,
  Text, Button, FlatList,
  Modal, TextInput, Pressable
} from 'react-native';
const App = () => {
  const [isShow, setShow] = useState(false);
  const [list, setList] = useState([
    {id: 1, name: 'ABC', desc: 'Mo ta ABC'}
  ]);
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [editingId, setEditingId] = useState(0);

  const onClose = () => {
    setShow(false);
    setNameInput(''); setDescInput(''); setEditingId(0);
  };
  const onSave = () => {
    // 0. Kiểm tra editingId để xem có phải đang sửa k
    if (editingId) {
      const newList = list.map(item => {
        if (item.id == editingId) {
          item.name = nameInput;
          item.desc = descInput;
        }
        return item;
      });
      setList(newList);
      // Đóng modal và cập nhật lại gt mặc định
      onClose();
      return;
    }
    // 1. Định nghĩa obj mới sẽ được lưu
    const newItem = {
      name: nameInput,
      desc: descInput,
      // mảng k có pt thì id = 1,
      // mảng có pt thì id cuối cùng  + 1
      id: list.length == 0
        ? 1
        : list[list.length - 1].id + 1
    };
    // 2. Thêm obj đó vào mảng mới và set state
    const newList = [...list, newItem];
    setList(newList);
    // 3. Ẩn modal sau khi đã lưu
    onClose();
  };

  const onDelete = (deleteId) => {
    const newList = list.filter((item) => {
      return item.id !== deleteId;
    });
    setList(newList);
  };

  const onEdit = (editId) => {
    // 1. Hiện modal lên
    setShow(true);
    // 2. Tìm phần tử đang được sửa để lấy thông tin
    const editItem = list.find(item => item.id == editId);
    // 3. Hiển thị dữ liệu sửa lên TextInput
    setNameInput(editItem.name);
    setDescInput(editItem.desc);
    setEditingId(editId);
  }

  return (
    <View>
      <Text>Họ tên: Nguyễn Đức Anh Tuấn</Text>
      <Text>MSV: PH12345</Text>
      {isShow ? null :
        <Button title='Them' onPress={() => setShow(true)} />}
      {/* Modal nhan gt bang visible de an hien giao dien */}
      <Modal visible={isShow} animationType="slide">
        <View>
          <Text>{nameInput} {descInput} {editingId}</Text>
          <TextInput placeholder='Ten'
            value={nameInput}
            onChangeText={(text) => setNameInput(text)}
          />
          <TextInput placeholder='Mo ta'
            value={descInput}
            onChangeText={(text) => setDescInput(text)}
          />
          <Button title='Huy' onPress={() => onClose()}/>
          <Button title='Luu' onPress={() => onSave()} />
        </View>
      </Modal>
      <FlatList
        data={list}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
          <Pressable onPress={() => onEdit(item.id)}>
            <Text>Suaaaaa</Text>
          </Pressable>
          <Pressable onPress={() => onDelete(item.id)}>
            <Text>Xoaaaaaaa</Text>
          </Pressable>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default App;
