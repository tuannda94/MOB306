import {View, Text, TextInput, Switch, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_BOOK } from '../../helpers/api';

const BookForm = (props) => {
    const {navigation: nav, route} = props;
    const editData = props.route.params?.editData;

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setAuthor(editData.author);
            // setPrice(editData.price + "");
            setPrice(`${editData.price}`);
            setStatus(editData.status ? true : false);
        }
    }, [editData?.id]);

    const onSave = () => {
        // const newObj = {
        //     name: name,
        //     author: author,
        //     price: price,
        //     status: status
        // };
        const newObj = {
            name,
            author,
            price: +price,
            status: status ? 1 : 0
        };
        fetch(
            !editData ? API_BOOK : `${API_BOOK}/${editData.id}`,
            {
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObj),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(res => nav.goBack())
        .catch(err => console.log(err));
    };

    return <View>
        <TextInput
            placeholder='Tên'
            value={name}
            onChangeText={(text) => {setName(text)}}
        />
        <TextInput
            placeholder='Tác giả'
            value={author}
            onChangeText={(text) => {setAuthor(text)}}
        />
        <TextInput
            placeholder='Giá'
            value={price}
            onChangeText={(text) => {setPrice(text)}}
            keyboardType={'numeric'}
        />
        <Switch
            value={status}
            onValueChange={() => setStatus(!status)}
        />
        <Button
            title={'Lưu'}
            onPress={() => onSave()}
        />
    </View>
};

export default BookForm;
