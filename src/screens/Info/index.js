import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';

// Yêu cầu: Hiển thị thông tin cá nhân
// - Họ tên: Tên SV
// - MSV: PHXXXXX
// - Ảnh đại diện: Dùng Image hiển thị ảnh

const Info = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    // Nếu object params truyền sang có id thì lấy id, nếu không thì = 0
    const id = route.params?.id || 0;

    const [name, setName] = useState('');
    const [msv, setMsv] = useState('');
    const [count, setCount] = useState(0);
    // 1. [] trong useEffect có thể không truyền gì vào
    // Đây là tình huống lần render đầu tiên của component Info
    // Các câu lệnh trong arrow function sẽ chỉ chạy 1 lần đó
    // 2. [] trong useEffect có tham số truyền vào là 1 giá trị nào đó
    // Nó sẽ chạy các câu lệnh trong arrow function lần đầu tiên và
    // mỗi khi thay đổi gt

    // Tình huống 1, mảng rỗng
    useEffect(
        () => {
            //  setName('Nguyen Van A Effect');
        }, // tham số này là những công việc nó sẽ làm
        [] // những thứ nó sẽ lắng nghe và tác động để làm việc bên trên
    );

    useEffect(
        // ngay sau khi name cập nhật giá trị thì chạy vào effect này
        // thực hiện setMsv = gt mới của name + 'PH12345678'
        () => {
            setMsv(name + 'PH12345678');
        },
        [name]
    );

    useEffect(() => {
        if (count % 2 == 0) {
            setName('Tên mới dang effect này' + count);
        }
    }, [count]);

    const onUpdate = () => {
        setName('Nguyen Van A');
    };

    return (
        <View>
            <Text>Trang thông tin</Text>
            {
                id !== 0
                ? <Text>Giá trị nhận từ màn hình trước đó đã có</Text>
                : <Text>Hệ thống đang gặp trục trặc!</Text>
            }
            <Text>Họ tên: {name}</Text>
            <Text>Mã sinh viên: {msv}</Text>
            <Button title='Cập nhật GT' onPress={() => onUpdate()} />
            <Text>Giá trị đếm: {count}</Text>
            <Button title='Tăng giá trị' onPress={() => {
                setCount(count + 1);
                // if (count == 2) {
                //     setName('Tên mới set thủ công');
                // }
            }} />
        </View>
    );
};

export default Info;
