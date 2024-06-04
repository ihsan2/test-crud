import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deleteUser, getUsers} from '../api-services';
import {User} from '../models/user';
import UserRowItem from '../components/UserRowItem';
import {useNavigation} from '@react-navigation/native';
import Text from '../components/Text';

const HomeScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData();
    });
    getData();
  });

  const getData = async (): Promise<void> => {
    let res = await getUsers();
    setUsers(res);
  };

  const onDelete = async (id: string): Promise<void> => {
    await deleteUser(id);
    getData();
  };

  const onAdd = (): void => {
    navigation.navigate('Form' as never);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Text>Add User</Text>
        </TouchableOpacity>
        {users.map(item => (
          <UserRowItem
            onDelete={() => onDelete(item?.id)}
            key={item.id}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 16,
  },
  button: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
