import {View, Button, TextInput} from 'react-native';
import {useState} from 'react';

const Form = (props) => {
    const {navigation: nav, route} = props;
    const [name, setName] = useState('');

    const onSave = () => {
        const newObj = {name}; // {name: name}
        fetch(
            'https://63e5fb6483c0e85a868a560d.mockapi.io/products',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(newObj)
            }
        ).then((res) => res.json())
        .then((data) => nav.navigate('About', {check: Math.random()*10000000}));
    };

    return (
        <View>
            <TextInput
                placeholder='Name'
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
