import {View, Pressable, Text, StyleSheet} from 'react-native';

const Home = (props) => {
    // Trong props sẽ có navigation được nhận từ Stack.Screen ở App.js
    const navigation = props.navigation;

    const chuyenMH = (ten_mh) => {
        navigation.navigate(ten_mh);
    }

    return (
        <View>
            <Text>Chào mừng đến với ứng dụng ABCXYZ</Text>
            <Pressable onPress={() => chuyenMH('Info')}>
                <Text>Vào trang Thông tin</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('UserList')}>
                <Text>Vào trang Danh sách</Text>
            </Pressable>
        </View>
    );
};

export default Home;
