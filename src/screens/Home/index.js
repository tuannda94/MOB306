import {
    View,
    Text,
    Pressable
} from 'react-native';

// Khi Home được đặt vào Stack.Screen
// thì sẽ nhận được props có tên navigation

/*
Yêu cầu:
- Màn hình Info: Hiển thị tên sv, mã sv, ảnh lấy từ assets
- Màn hình UserList: Hiển thị danh sách người dùng gồm 3 bản ghi chứa: id, name, age
*/
const Home = (props) => {
    const navigation = props.navigation;

    const chuyenMH = (tenMH, data = {}) => {
        // navigation.navigate('Tên màn hình', dữ liệu dạng object);
        navigation.navigate(tenMH, data);
    };

    return (
        <View>
            <Text>Trang chủ</Text>
            <Pressable onPress={() => chuyenMH(
                'Info', {name: 'TEN SV TRUYEN SANG', id: 'PH12345'}
            )}>
                <Text>Sang MH Thông tin</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('UserList', {title: 'Sản phẩm'})}>
                <Text>Sang MH Danh sách</Text>
            </Pressable>
        </View>
    );
};

export default Home;
