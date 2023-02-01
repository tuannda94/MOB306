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
  const [list, setList] = useState([]);

  const onSave = () => {
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
    setShowForm(false); setName(''); setPrice(0);
  };

  const onDelete = (itemId) => {
    const newList = list.filter((item) => {
      return item.id !== itemId;
    });
    setList(newList);
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
            // value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput placeholder='Gia SP' keyboardType='numeric'
            onChangeText={(text) => setPrice(text)}
          />
          <Button title='Huy'
            onPress={() => setShowForm(false)}
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
