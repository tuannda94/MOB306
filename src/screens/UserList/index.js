import {View, Text, FlatList} from 'react-native';
import {useState} from 'react';

const UserList = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const title = route.params.title;

    const data = [
        {id: 1, name: 'Nguyen Van A', age: 20},
        {id: 2, name: 'Nguyen Van B', age: 20},
        {id: 3, name: 'Nguyen Van C', age: 20},
    ];
    const [list, setList] = useState(data);

    return (
        <View>
            <Text>Trang {title}</Text>
            <FlatList
                data={list}
                renderItem={({item}) => <View>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                </View>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UserList;
