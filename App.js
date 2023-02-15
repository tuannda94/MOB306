import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import Manager from './Manager';
import Info from './src/screens/Info';
import ProductList from './src/screens/ProductList';

const Stack = createNativeStackNavigator();

const Home = (props) => {
    const navigation = props.navigation;
    return (<View>
        <Text>TRANG CHU</Text>
        <Button
            title='Sang MH Info'
            onPress={() => navigation.navigate('Info', {name: 'Tuan'})}
        />
    </View>);
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Manager' component={Manager} />
                <Stack.Screen name='Info' component={Info} />
                <Stack.Screen name='List' component={ProductList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
