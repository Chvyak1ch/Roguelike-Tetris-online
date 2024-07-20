import {$authHost, $host} from "./index";
import { jwtDecode } from 'jwt-decode';

export const login = async (email, password) => {
  const {data} = await $host.post('api/users/login', {email, password});
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};


export const check = async () => {
  const {data} = await $authHost.get('api/users/auth');
  localStorage.setItem('token', data.token);  
  return jwtDecode(data.token);
};

export const addUser = async (email, password, userName) => {
  const {data} = await $host.post('api/users/registration', {email, password, userName, role: 'USER'});
  console.log('дошли до сюда');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);  
};

export const allData = async () => {
  const {data} = await $host.get('api/users/showUsers', {
    params:{
      email: email, 
      password: password, 
      userName: userName, 
      id: id,
      role: role
    }
    });
  console.log('ну вроде как должны вывести аккаунты');
  return data;
};

