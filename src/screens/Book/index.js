import {View, Text, FlatList, Pressable, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_BOOK } from '../../helpers/api';
import { useIsFocused } from '@react-navigation/native';

const Book = (props) => {
    // const navigation = props.navigation;
    // const nav = navigation;
    // const route = props.route;
    const {navigation: nav, route} = props; //destructring
    const isFocused = useIsFocused();

    const [list, setList] = useState([]);

    const getBooks = () => {
        fetch(API_BOOK)
            .then(res => res.json())
            .then(data => setList(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getBooks()
    }, [isFocused]);

    const onDelete = (deleteId) => {
        fetch(
            `${API_BOOK}/${deleteId}`,
            {method: 'DELETE'}
        ).then((res) => {
            getBooks();
        }).catch(err => console.log(err));
    };

    const onEdit = (editId) => {
        fetch(`${API_BOOK}/${editId}`)
            .then(res => res.json())
            .then(data => nav.navigate(
                'BookForm',
                {editData: data}
            ))
    };

    return (
        <View>
            <Button
                title='Thêm mới'
                onPress={() => nav.navigate('BookForm')}
            />
            <FlatList
                data={list}
                renderItem={({item}) => <View>
                    <Text>Tên: {item.name}</Text>
                    <Text>Tác giả: {item.author}</Text>
                    <Text>Giá: {item.price}</Text>
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

export default Book;
