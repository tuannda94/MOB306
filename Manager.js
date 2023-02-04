import {
  View,
  Text,
  Button,
  FlatList,
  Modal,
  TextInput,
  Pressable
} from 'react-native';
import {useState} from 'react';
// export default function App () {};
const App = () => {
  const [isShowForm, setShowForm] = useState(false);
  const [list, setList] = useState([
    {id: 1, name: 'ABC', desc: 'Desc ABC'}
  ]);
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [editingId, setEditingId] = useState(0);

  const onClose = () => {
    setShowForm(false);
    setNameInput(''); setDescInput(''); setEditingId(0);
  }

  const onSave = () => {
    // 0. Kiểm tra editingId để biết là đang cập nhật
    if (editingId) {
      const newList = list.map(item => {
        if (item.id == editingId) {
          item.name = nameInput;
          item.desc = descInput;
        }
        return item;
      });
      setList(newList);
      return onClose();
    }
    // 1. Định nghĩa obj mới sẽ được lưu vào
    const newItem = {
      id: list.length == 0
        ? 1
        : list[list.length - 1].id + 1,
      name: nameInput,
      desc: descInput
    };
    // 2. Thêm phần tử mới vào mảng list
    // ... lấy toàn bộ pt của mảng mà k ảnh hưởng đến mảng đó
    const newList = [...list, newItem];
    setList(newList);
    // 3. Đóng modal
    onClose();
  };

  const onDelete = (deleteId) => {
    const newList = list.filter(item => item.id !== deleteId);
    setList(newList);
  };

  const onEdit = (editId) => {
    // 1.1 Hiển thị modal
    setShowForm(true);
    // 1.2 Tìm ra phần tử đang cần sửa theo editId
    const editItem = list.find(item => item.id == editId);
    setNameInput(editItem.name);
    setDescInput(editItem.desc);
    // Gán giá trị cho edittingId để biết là đang sửa
    setEditingId(editId);
  };

  return (
    <View>
      <Text>Họ tên: Nguyễn Đức Anh Tuấn</Text>
      <Text>MSV: PH12345</Text>
      {isShowForm ? null : <Button title="Thêm mới"
        onPress={() => setShowForm(true)}
      />}
      <Modal visible={isShowForm} animationType="slide">
        <View>
          <Text>{nameInput} {descInput} {editingId}</Text>
          <TextInput placeholder='Tên'
            value={nameInput}
            onChangeText={(text) => setNameInput(text)} />
          <TextInput placeholder='Mô tả'
            value={descInput}
            onChangeText={(text) => setDescInput(text)}
          />
          <Button title='Huỷ' onPress={() => onClose()} />
          <Button title='Lưu' onPress={() => onSave()} />
        </View>
      </Modal>
      <FlatList
        data={list}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
          <Pressable onPress={() => onEdit(item.id)}>
            <Text>Sửa</Text>
          </Pressable>
          <Pressable onPress={() => onDelete(item.id)}>
            <Text>Xoá</Text>
          </Pressable>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default App;
