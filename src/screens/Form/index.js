import {View, TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';

const Form = (props) => {
    const nav = props.navigation;
    // chỉ khi edit mới có editData
    const editData = props.route.params?.editData;
    const [name, setName] = useState('');

    useEffect(() => {
        if (editData){
            setName(editData.name);
        }
    }, [editData?.id]);

    const onSave = () => {
        // json-server không cần truyền id vào obj
        const newObj = {name: name}; // {name}
        fetch(
            // sửa thì method là PUT và endpoint có thêm id
            !editData ? API_USER : API_USER + '/' + editData.id,
            {
            method: !editData ? 'POST' : 'PUT',
            // đưa dữ liệu về dạng json để server đọc đc
            body: JSON.stringify(newObj),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => nav.goBack());
    };
    return (
        <View>
            <TextInput value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button
                title='Lưu'
                onPress={() => onSave()}
            />
        </View>
    );
};

export default Form;
