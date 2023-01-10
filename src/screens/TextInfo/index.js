// Mong muốn tạo ra 1 phần chức năng hiển thị thông tin
// Dùng chung được ở nhiều chỗ để đồng bộ về giao diện

// => Tạo ra 1 phần Text có style chung nhưng nội dung
// có thể thay đổi tuỳ chỗ sử dụng

import {Text, StyleSheet} from 'react-native';

// tất cả giá trị truyền sang được quy về là 1 obj tên là props
// cần lấy các thuộc tính bên trong ra để có giá trị sử dụng

// export default function TextInfo ({name}) {
export function SingleText (props) {
    return (<Text>Single Text</Text>);
}

export default function TextInfo (props) {
    const name = props.name; // sau props là tên thuộc tính
    const desc = props.desc;

    return (
        <>
            <Text style={styles.text}>{name}</Text>
            {
                desc
                    ? <Text style={styles.text}>Desc:{desc}</Text>
                    : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 30,
        fontStyle: 'italic'
    }
});

