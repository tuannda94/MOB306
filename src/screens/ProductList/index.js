import {
    FlatList,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default function ProductList (props) {
    const list = props.data;
    return (
        <FlatList
            data={list}
            renderItem={({item}) => (
                <>
                    <Text>{item.name}</Text>
                    <Text>{item.price} VND</Text>
                    <Image style={styles.image} source={
                        require('../../../assets/icon.png')
                    } />
                    <Image style={styles.image} source={
                        {uri: ''}
                    } />
                </>
            )}
            keyExtractor={(item) => item.id}
        />
    )
};

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
});
