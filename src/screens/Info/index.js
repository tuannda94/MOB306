import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';

const Info = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    // Effect là một hook để theo dõi tình trạng render của component
    // và thực hiện công việc được quy định trong arrow function
    // 1. Khi mảng phụ thuộc rỗng => chỉ chạy 1 lần khi vừa render xong
    useEffect(
        () => {
            setName('Name qua Effect');
            setId('Id qua Effect');
        },
        [] // chỉ chạy 1 lần duy nhất
    );
    // 2. Khi mảng phụ thuộc có pt => chạy lần đầu tiên và khi pt thay đổi gt
    useEffect(
        () => {
            setName('Name cập nhật sau khi id đã đổi giá trị' + id);
        },
        [id] // chạy nhiều lần, lần đầu là mới vào, lần sau là khi id đổi
    );

    useEffect(() => {
        if (count == 2) {
            setName('Name Effect' + count);
        }
    }, [count]);

    return (<View>
        <Text style={{fontSize: 30}}>Họ tên: {name}</Text>
        <Text style={{fontSize: 30}}>MSV: {id}</Text>
        <Button
            title='Gán giá trị'
            onPress={() => {
                setId('PH12345');
                // setName('Nguyen Van A');
            }}
        />

        <Text style={{fontSize: 30}}>Đếm: {count}</Text>
        <Button title='Tăng GT đếm'
            onPress={() => {
                setCount(count + 1);
                // if (count == 2) {
                //     setName('Name ' + count);
                // }
            }}
        />
    </View>
    );
};
export default Info;
