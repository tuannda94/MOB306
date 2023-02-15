import {View, Text, Button, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

const List = (props) => {
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://10.0.2.2:3000/users')
            .then((res) => res.json()) // trả về json
            .then((data) => {
                setList(data);
                setLoading(false);
            })
    }, []);

    const onAdd = () => {
        props.navigation.navigate('Add');
    }

    return (
        <View>
            <Button title='Thêm mới'
                onPress={() => onAdd()}
            />
            {
                isLoading
                    ? <Text style={{fontSize: 20}}>'Loading...'</Text>
                    : <FlatList
                        data={list}
                        renderItem={({item}) => <View>
                            <Text style={{fontSize: 30}}>
                                {item.name}
                            </Text>
                        </View>}
                        keyExtractor={(item, index) => index}
                    />
            }

        </View>
    );
};

export default List;
