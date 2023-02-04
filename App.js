import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';
import {View, Text, Button} from 'react-native';
const Stack = createNativeStackNavigator();

const Detail = (props) => {
    const navigation = props.navigation;
    return (<View>
        <Text>Detail</Text>
        <Button
        title='Sang Manager'
        onPress={() => navigation.navigate('Manager')}
    /></View>)
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Detail}
                />
                <Stack.Screen
                    name="Manager"
                    component={Manager}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
