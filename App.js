import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Manager from './Manager';
import Home from './src/screens/Home';
import UserList from './src/screens/UserList';
import Info from './src/screens/Info';

const Stack = createNativeStackNavigator();
// Các màn hình như sau
// - Home: gồm 1 nút: Vào trang Thông tin, 1 nút: Vào trang Danh sách
// - Bấm nút Vào trang Thông tin -> Chuyển sang màn hình Info
// - Bấm nút Vào trang Danh sách -> Chuyển sang màn hình UserList

// Khi Màn hình được truyền qua component trong Stack.Screen thì các màn hình đó
// sẽ nhận được props có tên là navigation, trong đó navigation.navigate('tên màn hình')
// giúp di chuyển sang màn hình khác

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Info' component={Info} />
                <Stack.Screen name='UserList' component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
