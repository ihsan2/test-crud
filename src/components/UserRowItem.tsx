import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {User} from '../models/user';
import Text from './Text';

type Props = {
  item: User;
  onDelete: () => void;
};

const UserRowItem = ({item, onDelete}: Props) => {
  return (
    <View style={styles.card}>
      <Text>Name: {item?.name}</Text>
      <Text>Email: {item?.email}</Text>
      <Text>Phone: {item?.phone}</Text>
      <Text>Age: {item?.age}</Text>
      <Text>Is Married: {item?.isMarried ? 'Y' : 'N'}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={onDelete}>
          <Text family="bold" color="red">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
  },
});

export default memo<Props>(UserRowItem);
