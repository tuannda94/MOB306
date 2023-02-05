import {View, Text, FlatList} from 'react-native';
import {useState} from 'react';

// Yêu cầu: Định nghĩa 1 mảng gồm 3 phần tử
// Mỗi phần tử gồm: id, name, age
// Sử dụng FlatList để hiển thị

const UserList = (props) => {
    const navigation = props.navigation;

    const data = [
        {id: 1, name: 'Nguyen Van A', age: 20},
        {id: 2, name: 'Nguyen Van B', age: 30},
        {id: 3, name: 'Nguyen Van C', age: 40},
    ];
    const [list, setList] = useState(data);

    return (
        <View>
            <Text>Trang danh sách</Text>
            <FlatList
                data={list}
                renderItem={({item}) => <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Tên: {item.name}</Text>
                    <Text>Tuổi: {item.age}</Text>
                </View>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UserList;
