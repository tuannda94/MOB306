import {View, Pressable, Text, Image} from 'react-native';

const Home = (props) => {
    // Trong props sẽ có navigation được nhận từ Stack.Screen ở App.js
    const navigation = props.navigation;

    const chuyenMH = (ten_mh, data) => {
        navigation.navigate(ten_mh, data);
    }

    return (
        <View>
            <Text>Chào mừng đến với ứng dụng ABCXYZ</Text>
            <Image
                source={{uri: 'https://picsum.photos/200'}}
                style={{width: 50, height: 50}}
            />
            <Image
                style={{width: 50, height: 50}}
                source={require('../../../assets/icon.png')}

            />
            <Pressable onPress={() => chuyenMH('Info', {yd: 123})}>
                <Text>Vào trang Thông tin</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('UserList', {id: 234})}>
                <Text>Vào trang Danh sách</Text>
            </Pressable>
        </View>
    );
};

export default Home;
