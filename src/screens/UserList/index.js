import {View, Text, FlatList, Pressable, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';
import {useIsFocused} from '@react-navigation/native';

const UserList = (props) => {
    const nav = props.navigation;
    const route = props.route;
    const title = route.params.title;

    const trangThaiManHinh = useIsFocused();

    const [list, setList] = useState([]);

    const getList = () => {
        // IP thay cho localhost của máy ảo android: 10.0.2.2
        // IP thay cho localhost của máy ảo genymotion: 10.0.3.2
        fetch(API_USER)
            .then((res) => res.json()) // khi call thành công thì vào then
            .then((data) => setList(data)) // kq then đầu tiên là tham số của then tiếp theo
            .catch((err) => console.log(err)) // khi call thất bại thì vào catch
    };

    useEffect(() => {
        getList();
    }, [trangThaiManHinh]);

    const onDelete = (deleteId) => {
        // Call API để xoá -> cập nhật lại ds
        // method: DELETE
        // endpoint: /users/deleteId
        fetch(
            API_USER + '/' + deleteId,
            {method: 'DELETE'}
        )
        .then(res => getList())
        .catch(err => console.log(err));
    };

    const onEdit = (editId) => {
        // Call API lấy chi tiết -> chuyển sang Form
        fetch(API_USER + '/' + editId)
        .then(res => res.json())
        .then(data => nav.navigate('Form', {
            editData: data
        })).catch(err => console.log(err));

    };

    return (
        <View>
            <Text>Trang {title}</Text>
            <Button title='Thêm mới'
                onPress={() => nav.navigate('Form')}
            />
            <FlatList
                data={list}
                renderItem={({item}) => <View>
                    <Text style={{fontSize: 30}}>{item.id}</Text>
                    <Text style={{fontSize: 30}}>{item.name}</Text>
                    <Text style={{fontSize: 30}}>{item.age}</Text>
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

export default UserList;
