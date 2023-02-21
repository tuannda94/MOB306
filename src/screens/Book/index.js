import {View, Text, FlatList, Button, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import { API_BOOK } from '../../helpers/api';
import {useIsFocused} from '@react-navigation/native';

const Book = (props) => {
    const navigation = props.navigation;
    const kiem_tra = useIsFocused();

    const [list, setList] = useState([]);

    const getList = () => {
        fetch(API_BOOK)
        .then((res) => res.json())
        .then((data) => setList(data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        getList();
    }, [kiem_tra]);

    const onAdd = () => {
        navigation.navigate('AddBook');
    };

    const onEdit = (editId) => {
        fetch(`${API_BOOK}/${editId}`)
        .then(res => res.json())
        .then(data => navigation.navigate('AddBook', {
            editData: data
        }))
        .catch(err => console.log(err));
    };

    const onDelete = (deleteId) => {
        fetch(
            `${API_BOOK}/${deleteId}`, // API_BOOK + '/' + deleteId
            {method: 'DELETE'}
        ).then(res => {
            getList();
        })
    };

    return (
        <View>
            <Button title='Thêm mới' onPress={() => onAdd()} />
            <FlatList
                data={list}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Pressable onPress={() => onEdit(item.id)}>
                            <Text>Sua</Text>
                        </Pressable>
                        <Pressable onPress={() => onDelete(item.id)}>
                            <Text>Xoa</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
};

export default Book;
