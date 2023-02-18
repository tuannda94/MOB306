import {View, TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { API_USER } from '../../helpers/api';

const Form = (props) => {
    const nav = props.navigation;
    const editData = props.route.params?.editData;
    const [name, setName] = useState('');

    // Lần đầu vào nếu có dl chỉnh sửa -> gán để hiển thị
    useEffect(() => {
        if (editData) {
            setName(editData.name);
        }
    }, [editData?.id]);

    const onSave = () => {
        // Định nghĩa obj sẽ lưu
        const newObj = {name: name};
        // Call API lưu obj vừa rồi
        fetch(
            !editData ? API_USER : API_USER + '/' + editData.id,
            {
            method: !editData ? 'POST' : 'PUT',
            body: JSON.stringify(newObj),
            // chuẩn của http
            // bắt buộc phải đưa vào khi làm json
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => nav.goBack())
        .catch(err => console.log(err));
        // Quay về màn hình ds sau khi đã lưu thành công
    };

    return (
        <View>
            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title='Lưu'
                onPress={() => onSave()}
            />
        </View>
    )
};
export default Form;
