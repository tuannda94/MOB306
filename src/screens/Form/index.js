import {View, Text, TextInput, Button, Switch} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';

const Form = (props) => {
    const editItem = props.route.params?.editItem;

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (editItem) {
            setName(editItem.name);
            setStatus(editItem.status + '');
        }
    }, [editItem?.id]);

    const onSave = () => {
        // 1. Định nghĩa obj dùng để lưu bản ghi mới
        const newObj = {name: name, status: status};
        // 2. Call API để lưu bản ghi
        fetch(
            !editItem?.id ? API_USER : (API_USER + '/' + editItem.id),
            {
                // cấu hình đính kèm khi gửi yêu cầu để đảm bảo
                // phía server tiếp nhận được dữ liệu json
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                // phương thức gửi khi tạo mới là POST
                method: !editItem?.id ? 'POST' : 'PUT',
                // dữ liệu khi tạo mới được ép về dạng chuỗi json
                body: JSON.stringify(newObj)
            }
        ).then(res => props.navigation.goBack())
        .catch((err) => console.log(err));
        // 3. Quay về danh sách và hiển thị dữ liệu mới
    };

    return (
        <View>
            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder='Status'
                value={status}
                onChangeText={(text) => setStatus(text)}
            />
            <Button title={'Save'} onPress={() => onSave()} />
        </View>
    );
};

export default Form;
