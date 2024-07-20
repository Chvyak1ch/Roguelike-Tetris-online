import {$authHost, $host} from "./index";

export const create = async ( userName, userText) => {
  const {data} = await $host.post('api/faqcomments/create', { userName, userText});
  console.log('комментарий создан');
  return data;
};

export const getAll = async () => {
  const {data} = await $host.get('api/faqposts/getAll');
  console.log('вывод всех комментариев');
  return data;
};