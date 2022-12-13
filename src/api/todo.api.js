import axios from 'axios';
const url = 'https://todoapp-api-firstbranch.onrender.com';
export const read_todo = async () => {
  const { data } = await axios.get(url);
  return data;
};
export const delete_todo = async (id) => {
  await axios.delete(`${url}/${id}`);
  return;
};
export const create_todo = async (todo) => {
  const { data } = await axios.post(url, todo);
  return data;
};

export const get_todo = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};
export const update_todo = async (id, todo) => {
  await axios.put(`${url}/${id}`, todo);
  return;
};
