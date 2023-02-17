import {
    NavigationContainer,
    useIsFocused
}
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Manager from './Manager'; // file App cũ
import {View, Text, Button, FlatList, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
const Stack = createNativeStackNavigator();
import Form from './src/screens/Form';
import { API_USER } from "./src/helpers/api";

// Tạo ra thêm 1 màn hình About để quản lý
const About = (props) => {
    const nav = props.navigation;
    const check = props.route.params?.check;
    // lắng nghe trạng thái khi quay lại màn hình
    const isFocused = useIsFocused();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // useEffect là hook giúp lắng nghe việc render của
    // component đang chứa nó
    // 1. Khi component vừa render xong, [] k có phần tử
    const getUsers = () => {
        fetch(API_USER)
        .then(res => res.json())
        .then(data => {
            setList(data);
            setLoading(false);
        });
    };
    useEffect(() => {
        getUsers();
    }, [isFocused]); // mảng rỗng thì chỉ chạy 1 lần duy nhất

    // useEffect(() => {
    //     // CV được thực hiện khi mới render vào và
    //     // khi name có gt mới
    //     setId(name + 123);
    // }, [name]);

    const onEdit = (editId) => {
        // 1. Lấy ra bản ghi chi tiết của pt có editId
        fetch(`${API_USER}/${editId}`)
            .then(res => res.json())
            .then(data => nav.navigate(
                'Form',
                {editData: data}
            ))
        // 2. Gửi dữ liệu đó sang Form để chỉnh sửa
    };

    const onDelete = (deleteId) => {
        // method DELETE
        // endpoint: http://localhost:3000/users/1
        fetch(`${API_USER}/${deleteId}`, {
            method: 'DELETE'
        }).then(res => getUsers());
    };

    return (<View>
        <Button
            title="Thêm mới"
            onPress={() => nav.navigate('Form')}
        />
        {
            isLoading
                ? <Text style={{fontSize:40}}
                >Loading...</Text>
                : <FlatList
                    data={list}
                    renderItem={({item}) => <View>
                        <Text style={{fontSize: 30}}>{item.name}</Text>
                        <Pressable onPress={() => onEdit(item.id)}>
                            <Text>Sửa</Text>
                        </Pressable>
                        <Pressable onPress={() => onDelete(item.id)}>
                            <Text>Xoá</Text>
                        </Pressable>
                    </View>}
                    keyExtractor={(item) => item.id}
                />
        }



        {/* <Text style={{fontSize: 30}}>Trang About</Text>
        <Text style={{fontSize: 30}}>Họ tên: {name}</Text>
        <Text style={{fontSize: 30}}>MSV: {id}</Text>
        <Button
            title="Hiển thị GT"
            onPress={() => {
                setName('ABC');
                // setId(1);
            }}
        />
        <Button
            title='Sang Manager'
            onPress={() => nav.navigate(
                'Manager',
                {name: 'Người dùng'}
            )}
        /> */}
    </View>);
};

const Home = (props) => {
    const nav = props.navigation;
    return (<View>
        <Button title="Sang About"
            onPress={() => nav.navigate('About')}
        />
    </View>);
};

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen
                name="Manager" component={Manager}
            />
            <Stack.Screen
                name='About' component={About}
            />
            <Stack.Screen
                name="Form" component={Form}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
