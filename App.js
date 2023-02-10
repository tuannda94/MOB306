import { NavigationContainer }
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Manager from './Manager'; // file App cũ
import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';
const Stack = createNativeStackNavigator();

// Tạo ra thêm 1 màn hình About để quản lý
const About = (props) => {
    const nav = props.navigation;
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [list, setList] = useState([]);
    // useEffect là hook giúp lắng nghe việc render của
    // component đang chứa nó
    // 1. Khi component vừa render xong, [] k có phần tử
    useEffect(() => {
        // setName('Name Effect');
        // setId('Id Effect');
        fetch('http://10.0.2.2:3000/users')
            .then(res => res.json())
            .then(data => setList(data));
    }, []); // mảng rỗng thì chỉ chạy 1 lần duy nhất

    useEffect(() => {
        // CV được thực hiện khi mới render vào và
        // khi name có gt mới
        setId(name + 123);
    }, [name]);

    return (<View>
        <Text style={{fontSize: 30}}>Trang About</Text>
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
        />
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
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
