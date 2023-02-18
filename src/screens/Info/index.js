import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';

const Info = (props) => {
    // prop navigation dùng để điều hướng
    const navigation = props.navigation;
    // route params để nhận dữ liệu
    const route = props.route;

    const name = route.params.name;
    const id = route.params.id;

    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [count, setCount] = useState(0);

    // useEffect là nơi lắng nghe xem component đã render ra chưa
    // 1. Áp dụng khi tham số thứ 2 là [] có phần tử hay không cũng đc
    // thì useEffect này đều được chạy vào ngay sau khi đã render xong
    useEffect(() => {
        // setEmail('Email lấy từ effect');
        // setAddress('Address lấy từ effect');
        // Nếu effect chỉ là mảng rỗng những câu lệnh này chỉ chạy 1 lần
    }, []);

    // 2. Chỉ áp dụng khi tham số thứ 2 có thêm phần tử
    useEffect(() => {
        setAddress(email + 'Ha Noi Effect');
    }, [email]);

    useEffect(() => {
        if (count == 2) {
            setAddress(email + 'Hanoi Effect' + count);
        }
    }, [count]);

    return (
        <View>
            <Text style={{fontSize: 30}}>Trang thông tin</Text>
            <Text style={{fontSize: 30}}>Tên: {name}</Text>
            <Text style={{fontSize: 30}}>Mã SV: {id}</Text>

            <Text style={{fontSize: 30}}>Email: {email}</Text>
            <Text style={{fontSize: 30}}>Địa chỉ: {address}</Text>
            <Button
                title='Cập nhật email & địa chỉ'
                onPress={() => {
                    const newEmail = 'tuannda3@fpt.edu.vn';
                    setEmail(newEmail);
                    setAddress(newEmail + 'Ha Noi');
                }}
            />
            <Text style={{fontSize: 30}}>Đếm: {count}</Text>
            <Button title='Tăng gt đếm'
                onPress={() => {
                    setCount(count + 1);
                    // if (count == 2) {
                    //     setAddress(email + ' Ha Noi ' + count);
                    // }
                }}
            />
        </View>
    );
}

export default Info;
