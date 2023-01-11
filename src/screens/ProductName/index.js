import {Text, StyleSheet} from 'react-native';

export default function ProductName (props) {
    // props là 1 obj nhận được từ cha truyền sang
    // ở đây props sẽ có 1 key là name
    // lấy giá trị truyền sang: props.name
    return (
        <>
            <Text style={styles.text}>{props.name}</Text>
            <ProductDesc desc={
                props.description
                    ? props.description
                    : 'Updating...'
            } />
        </>
    );
}

export function ProductDesc (props) {
    return (
        <Text style={styles.text}>{props.desc}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 30
    }
});
