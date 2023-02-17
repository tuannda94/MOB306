import {View, Text, Button, FlatList, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import { API_USER } from '../../helpers/api';

const List = (props) => {
    // useIsFocused là hook mà react-navigation tạo ra
    // để giúp lắng nghe việc màn hình được hiển thị
    const isFocused = useIsFocused(); // tạo 1 biến trạng thái hiển thị
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [editItem, setEditItem] = useState(null);

    const getList = () => {
        fetch(API_USER)
            .then((res) => res.json()) // trả về json
            .then((data) => {
                setList(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        getList();
    // effect sẽ chạy lần đầu tiên và khi màn hình được vào bằng react-navigation
    }, [isFocused]);

    const onAdd = () => {
        props.navigation.navigate('Form');
    };

    const onDelete = (deleteId) => {
        // 1. Call API xoá luôn
        // http://localhost:3000/users/1 method DELETE để xoá pt có id 1
        fetch(API_USER + '/' + deleteId, {method: 'DELETE'})
            .then((res) => getList())
            .catch((err) =>console.log(err));
        // 2. Kiểm tra nếu xoá thành công thì cập nhật lại danh sách
    };

    const onEdit = (editId) => {
        // 1. Lấy ra phần tử có id là id đang được sửa
        fetch(API_USER + '/' + editId)
            .then(res => res.json())
            .then(data => props.navigation.navigate('Form', {editItem: data}));
        // 2. Chuyển màn hình và gửi dữ liệu chỉnh sửa đi kèm sang
        // props.navigation.navigate('Form', {editItem: editItem});
    };

    return (
        <View>
            <Button title='Thêm mới'
                onPress={() => onAdd()}
            />
            {
                isLoading
                    ? <Text style={{fontSize: 20}}>'Loading...'</Text>
                    : <FlatList
                        data={list}
                        renderItem={({item}) => <View>
                            <Text style={{fontSize: 30}}>
                                {item.name}
                            </Text>
                            <Pressable onPress={() => onEdit(item.id)}>
                                <Text>Edit</Text>
                            </Pressable>
                            <Pressable onPress={() => onDelete(item.id)}>
                                <Text>Delete</Text>
                            </Pressable>
                        </View>}
                        keyExtractor={(item, index) => index}
                    />
            }

        </View>
    );
};

export default List;
