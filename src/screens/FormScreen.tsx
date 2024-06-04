import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RequestUser} from '../models/user';
import {addUser} from '../api-services';
import {useNavigation} from '@react-navigation/native';

const FormScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [isMarried, setIsMarried] = useState<string>('Y');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const onAdd = (): void => {
    let params: RequestUser = {
      age: Number(age),
      name: name,
      isMarried: isMarried === 'Y' ? true : false,
      email: email,
      phone: phone,
    };
    addUser(params).then(() => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={x => setName(x)}
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={x => setAge(x)}
      />
      <TextInput
        placeholder="Is Married"
        style={styles.input}
        value={isMarried}
        onChangeText={x => setIsMarried(x)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={x => setEmail(x)}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        value={phone}
        onChangeText={x => setPhone(x)}
      />
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    height: 48,
    marginBottom: 8,
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

export default FormScreen;
