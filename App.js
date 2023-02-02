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

  const onSave = () => {
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
    setShow(false);
  };

  const onDelete = (deleteId) => {
    const newList = list.filter((item) => {
      return item.id !== deleteId;
    });
    setList(newList);
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
          <Text>{nameInput} {descInput}</Text>
          <TextInput placeholder='Ten'
            onChangeText={(text) => setNameInput(text)}
          />
          <TextInput placeholder='Mo ta'
            onChangeText={(text) => setDescInput(text)}
          />
          <Button title='Huy' onPress={() => setShow(false)}/>
          <Button title='Luu' onPress={() => onSave()} />
        </View>
      </Modal>
      <FlatList
        data={list}
        renderItem={({item}) => <View>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
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
