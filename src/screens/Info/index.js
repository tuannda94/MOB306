import {View, Text} from 'react-native';

// Yêu cầu: Hiển thị thông tin cá nhân
// - Họ tên: Tên SV
// - MSV: PHXXXXX
// - Ảnh đại diện: Dùng Image hiển thị ảnh

const Info = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    // Nếu object params truyền sang có id thì lấy id, nếu không thì = 0
    const id = route.params?.id || 0;

    return (
        <View>
            <Text>Trang thông tin</Text>
            {
                id !== 0
                ? <Text>Giá trị nhận từ màn hình trước đó đã có</Text>
                : <Text>Hệ thống đang gặp trục trặc!</Text>
            }

        </View>
    );
};

export default Info;
