import {View, TextInput, Button, Switch} from 'react-native';
import {useState, useEffect} from 'react';
import { API_BOOK } from '../../helpers/api';

const AddBook = (props) => {
    const navigation = props.navigation;
    const editData = props.route.params?.editData;
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setStatus(editData.status);
        }
    }, [editData?.id]);

    const onSave = () => {

        // const newObj = {name: name, status: status};
        const newObj = {name, status};
        fetch(
            !editData ? API_BOOK : `${API_BOOK}/${editData.id}`,
            {
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObj),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        ).then(res => navigation.goBack())
    };

    return (
        <View>
            <TextInput placeholder='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Switch
                value={status}
                onValueChange={() => setStatus(!status)}
            />
            <Button
                title='Lưu'
                onPress={() => onSave()}
            />
        </View>
    );
};

export default AddBook;
