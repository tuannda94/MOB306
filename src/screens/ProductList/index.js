import {FlatList, Text, StyleSheet} from 'react-native';

export default function ProductList (props) {
    const productList = [
        {id: 1, name: 'Iphone 12', price: 1000000},
        {id: 2, name: 'Iphone 13', price: 2000000},
    ];

    return (
        <FlatList
            data={productList}
            // item là giao diện trả về sau mỗi vòng lặp
            renderItem={({item}) => (
                <>
                    <Text>Tên SP: {item.name}</Text>
                    <Text>Giá: {item.price} VND</Text>
                </>
            )}
            // key là giá trị duy nhất trả về sau mỗi vòng lặp
            keyExtractor={(item) => item.id}
        />
    );

}

const styles = StyleSheet.create({});
