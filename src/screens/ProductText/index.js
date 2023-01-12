// Mục tiêu: tạo ra 1 phần dùng chung
// Thể hiện giao diện, chỉ cần code 1 lần, có thể
// thay đổi nội dung cho phù hợp
import {Text, StyleSheet} from 'react-native';

// 1 file js nhiều component nhưng chỉ 1 được export default
export function ProductPrice (props) {
    return (
        <Text style={styles.price}>
            {props.value} VND
        </Text>
    );
}

// export default function ProductText ({name}) {
export default function ProductText (props) {
    // props là 1 object truyền từ cha sang
    // props chứa các key kèm theo giá trị
    // const name = props.name; // lấy giá trị của prop name
    let statusText = '';
    if (props.status === 0) {
        statusText = 'Chưa kích hoạt';
    } else if  (props.status === 1) {
        statusText = 'Kích hoạt';
    } else if  (props.status === 2) {
        statusText = 'Admin';
    } else {
        statusText = 'Có vấn đề với tài khoản';
    }
    return (
        <>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.textDesc}>
                {props.desc ? props.desc : 'Updating...'}
            </Text>
            <Text style={styles.textDesc}>
                {/* {props.status === 0
                    ? 'K Kích hoạt'
                    : (props.status === 1 ? 'Kích hoạt' : 'Admin')
                } */}
                {statusText}
            </Text>
        </>
    );
}
const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    textDesc: {}
});
