import {$authHost, $host} from "./index";

export const create = async (rows, levels, score, userId) => {
  const {data} = await $host.post('api/games/create', {rows, levels, score, userId});
  console.log('ну вроде как записали все по игре');
  return data;
};

export const allGames = async (rows, levels, score, userId) => {
  const {data} = await $host.get('api/games/allGames', {
    params:{
      rows: rows, 
      levels: levels, 
      score: score, 
      userId: userId
    }
    });
  console.log('ну вроде как должны вывести игры');
  return data;
};