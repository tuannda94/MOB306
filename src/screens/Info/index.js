import {View, Text} from 'react-native';

const Info = (props) => {
    // prop navigation dùng để điều hướng
    const navigation = props.navigation;
    // route params để nhận dữ liệu
    const route = props.route;

    const name = route.params.name;
    const id = route.params.id;

    return (
        <View>
            <Text>Trang thông tin</Text>
            <Text>Tên: {name}</Text>
            <Text>Mã SV: {id}</Text>
        </View>
    );
}

export default Info;
