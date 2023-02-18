import {View, Text, FlatList, Pressable, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';
// Hỗ trợ việc kiểm tra xem màn hình đã hiển thị chưa
import { useIsFocused } from '@react-navigation/native';

// Yêu cầu: Định nghĩa 1 mảng gồm 3 phần tử
// Mỗi phần tử gồm: id, name, age
// Sử dụng FlatList để hiển thị
// json-server db.json --watch
const UserList = (props) => {
    const navigation = props.navigation;
    // khai báo 1 biến trạng thái hiển thị
    // sử dụng ở useEffect để lắng nghe việc cập nhật ds
    const isFocused = useIsFocused();

    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getList = () => {
        fetch(API_USER)
            .then((res) => res.json()) // khi api call thành công thì chạy vào then
            // kết quả của lần then trước là res.json() là tham số data của then tiếp theo
            .then((data) => {setList(data); setLoading(false);})
            .catch((err) => console.log(err)) // khi api call thất bại thì chạy vào catch
    };

    useEffect(() => {
        // Khi component vừa render xong thì sẽ call API lấy dữ liệu về
        getList();
    }, [isFocused]); // Khi màn hình được quay lại thì sẽ gọi danh sách mới

    const onDelete = (deleteId) => {
        // Gọi API API_USER + 1 để xoá phần tử có id 1
        // phương thức là DELETE
        fetch(
            API_USER + '/' + deleteId,
            {method: 'DELETE'}
        ).then((res) => getList())
        .catch((err) => console.log(err));
    };

    const onEdit = (editId) => {
        // Call API lấy dữ liệu chi tiết ở đây rồi gửi sang
        fetch(API_USER + '/' + editId)
        .then((res) => res.json())
        .then(data => navigation.navigate('Form', {
            editData: data
        }));
    };

    return (
        <View>
            <Text>Trang danh sách</Text>
            <Button
                title='Thêm mới'
                onPress={() => navigation.navigate('Form')}
            />
            {isLoading
                ? <Text style={{fontSize: 50}}>Loading...</Text>
                : <FlatList
                    data={list}
                    renderItem={({item}) => <View>
                        <Text style={{fontSize: 30}}>ID: {item.id}</Text>
                        <Text style={{fontSize: 30}}>Tên: {item.name}</Text>
                        <Text style={{fontSize: 30}}>Tuổi: {item.age}</Text>
                        <Pressable onPress={() => onEdit(item.id)}>
                            <Text style={{fontSize: 30}}>Sua</Text>
                        </Pressable>
                        <Pressable onPress={() => onDelete(item.id)}>
                            <Text style={{fontSize: 30}}>Xoa</Text>
                        </Pressable>
                    </View>}
                    keyExtractor={(item, index) => index}
                />
            }

        </View>
    );
};

export default UserList;
