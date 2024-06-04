import axios from 'axios';
import {RequestUser, User} from '../models/user';

export const getUsers = async (): Promise<User[]> => {
  let res = await axios.get<User[]>(
    'https://64b4d767f3dbab5a95c62d4d.mockapi.io/users',
  );
  return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`https://64b4d767f3dbab5a95c62d4d.mockapi.io/users/${id}`);
};

export const addUser = async (params: RequestUser): Promise<void> => {
  await axios.post('https://64b4d767f3dbab5a95c62d4d.mockapi.io/users', params);
};
