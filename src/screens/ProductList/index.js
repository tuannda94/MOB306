import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const ProductList = (props) => {
    // dữ liệu ds cần được truyền vào để dùng ở nhiều nơi
    // => cần 1 props là data để nhận dữ liệu
    const productList = props.data;

    return (
        <SafeAreaView style={styles.safeView}>
            <FlatList
                data={productList}
                // renderItem cho 1 object chứa {item} trả về view
                renderItem={({item}) => (
                    <View><Text>{item.name}</Text></View>
                )}
                // key cho item và trả về 1 giá trị là duy nhất
                keyExtractor={(item) => item.id} // id là thuộc tính trong ds
            />
        </SafeAreaView>
    )
};
export default ProductList;

const styles = StyleSheet.create({
    safeView: {
        flex: 1
    }
});
