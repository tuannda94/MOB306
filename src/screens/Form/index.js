import {View, Button, TextInput} from 'react-native';
import {useState, useEffect} from 'react';
import {API_USER} from '../../helpers/api';

const Form = (props) => {
    const {navigation: nav, route} = props;
    const editData = route.params?.editData;
    const [name, setName] = useState('');

    useEffect(() => {
        if (editData) {
            setName(editData.name);
        }
    }, [editData?.id]);

    const onSave = () => {
        const newObj = {name}; // {name: name}
        fetch(
            !editData ? API_USER : `${API_USER}/${editData.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObj)
            }
        ).then((res) => nav.goBack());
        // Khi thành công sẽ quay trở lại mh trc đó
    };

    return (
        <View>
            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button
                title={'Tạo mới'}
                onPress={onSave}
                // onPress={() => onSave()}
            />
        </View>
    )
};
export default Form;
