// icons code
const removeSVG = ``;
const completeSVG = ``;


document.getElementById('add').addEventListener('click', () => {
  const value = document.getElementById('item').value;
  if(value) addItemTodo(value);
})

const addItemTodo = (text) => {
  const list = document.getElementById('todo');
  const item = document.createElement('li');
  item.innerText = text;
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  const remove  = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  const complete  = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.appendChild(item);  
}; 