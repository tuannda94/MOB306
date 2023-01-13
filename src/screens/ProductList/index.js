import {
    FlatList,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

// component để hiển thị giao diện từng phần tử
const ProductItem = (props) => {
    const item = props.data;
    // => tên sp là item.name, giá item.price
    return (
        <>
            <Text>Tên món: {item.name}</Text>
            <Text>Giá: {item.price} VND</Text>
            <Image source={
                // {uri: 'https://picsum.photos/50'}
                require('../../../assets/icon.png')
            }
                style={styles.productImage}
            />
        </>
    );
}

// export default function ProductList (props) {}
const ProductList = (props) => {
    // Khi data không được truyền vào thì mặc định là []
    const list = props.data || [];

    return (
        <FlatList
            data={list}
            renderItem={({item}) => <ProductItem data={item} />}
            // renderItem={(ts) => <ProductItem {...ts} />}
            keyExtractor={(item) => item.id}
        />
    );
};
export default ProductList;

const styles = StyleSheet.create({
    productImage: {width: 50, height: 50}
});
