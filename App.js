import { NavigationContainer }
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Manager from './Manager'; // file App cũ

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Manager">
            <Stack.Screen
                name="Manager" component={Manager}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
