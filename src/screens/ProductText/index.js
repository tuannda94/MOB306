import {Text, StyleSheet, Image} from 'react-native';
// Trong 1 file chỉ 1 function được export dạng default
// Nếu export default thì khi import không cần {}
// Nếu export không default thì bắt buộc có {} và đúng tên
export function ProductImage (props) {
    return (
        <Image
            style={styles.image}
            source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3nsTgTB_eUZc0j-Xn-R1Ow&ust=1673488052122000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDM3PuyvvwCFQAAAAAdAAAAABAE'}}
        />
    );
}

// export default function ProductText ({name}) {
export default function ProductText (props) {
    // props là 1 obj truyền từ cha sang
    // ở đây cần có 1 key tên là name
    const name = props.name;
    const desc = props.desc;

    return (
        // <Text style={styles.text}>{props.name}</Text>
        <>
            <Text style={styles.text}>{name}</Text>
            <Text>{desc ? desc : 'Updating...'}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue'
    },
    image: {
        width: 200,
        height: 200,
    }
});
