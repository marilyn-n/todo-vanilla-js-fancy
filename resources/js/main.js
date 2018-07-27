document.getElementById('add').addEventListener('click', () => {
  const value = document.getElementById('item').value;
  if(value) addItemTodo(value);
})

const addItemTodo = (value) => {
  console.log(value);
};