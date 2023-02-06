import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';
import {View, Text, Button} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = (props) => {
    const navigation = props.navigation;
    return (<View>
        <Text>TRANG CHU</Text>
        <Button
            title='Sang MH Manager'
            onPress={() => navigation.navigate('Manager', {name: 'Tuan'})}
        />
    </View>);
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Manager' component={Manager} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
