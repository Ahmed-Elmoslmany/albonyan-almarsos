
const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', () => {
  const userId = '1';
  const user = {
    name: 'Ahmed',
    age: 20,
    hobbies: ['Coding', 'Reading']
  };
  document.cookie = `uid=${userId}`
  document.cookie = `user=${JSON.stringify(user)}`

});

retrBtn.addEventListener('click', () => {
 console.log(document.cookie)
});