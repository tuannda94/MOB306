import {View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

const UserList = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const title = route.params.title;

    const [list, setList] = useState([]);

    useEffect(() => {
        // IP thay cho localhost của máy ảo android: 10.0.2.2
        // IP thay cho localhost của máy ảo genymotion: 10.0.3.2
        fetch('http://10.0.2.2:3000/users')
            .then((res) => res.json()) // khi call thành công thì vào then
            .then((data) => setList(data)) // kq then đầu tiên là tham số của then tiếp theo
            .catch((err) => console.log(err)) // khi call thất bại thì vào catch
    }, []);

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
