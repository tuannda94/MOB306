import {View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

// Yêu cầu: Định nghĩa 1 mảng gồm 3 phần tử
// Mỗi phần tử gồm: id, name, age
// Sử dụng FlatList để hiển thị
// json-server db.json --watch
const UserList = (props) => {
    const navigation = props.navigation;
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Khi component vừa render xong thì sẽ call API lấy dữ liệu về
        fetch('http://10.0.2.2:3000/users')
            .then((res) => res.json()) // khi api call thành công thì chạy vào then
            // kết quả của lần then trước là res.json() là tham số data của then tiếp theo
            .then((data) => {setList(data); setLoading(false);})
            .catch((err) => console.log(err)) // khi api call thất bại thì chạy vào catch
    }, []);

    return (
        <View>
            <Text>Trang danh sách</Text>
            {isLoading
                ? <Text style={{fontSize: 50}}>Loading...</Text>
                : <FlatList
                    data={list}
                    renderItem={({item}) => <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Tên: {item.name}</Text>
                        <Text>Tuổi: {item.age}</Text>
                    </View>}
                    keyExtractor={(item, index) => index}
                />
            }

        </View>
    );
};

export default UserList;
