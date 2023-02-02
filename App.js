import {
  View,
  Text,
  Button,
  FlatList,
  Modal,
  TextInput
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
  const onSave = () => {
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
    setShowForm(false);
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
          <Text>{nameInput} {descInput}</Text>
          <TextInput placeholder='Tên'
            onChangeText={(text) => setNameInput(text)} />
          <TextInput placeholder='Mô tả'
            onChangeText={(text) => setDescInput(text)}
          />
          <Button title='Huỷ' onPress={() => setShowForm(false)} />
          <Button title='Lưu' onPress={() => onSave()} />
        </View>
      </Modal>
      <FlatList
        data={list}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
        </View>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default App;
