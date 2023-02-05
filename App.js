import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Manager from './Manager';
import Home from './src/screens/Home';
import Info from './src/screens/Info';
import UserList from './src/screens/UserList';

const Stack = createNativeStackNavigator();

/*
Yêu cầu ứng dung:
- Màn hình Home: Màn hình chính, hiển đầu tiên, có 2 nút chuyển màn hình sang 2 màn dưới
- Màn hình Info: Màn hình Thông tin cá nhân
- Màn hình UserList: Màn hình Danh sách người dùng
*/

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Info" component={Info} />
                <Stack.Screen name="UserList" component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
