
const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = function(event){

  db = event.target.result;


  const objStore = db.createObjectStore('products', {keypath: 'id'})

  objStore.transaction.oncomplete = function(event){
    const productStore = db.transaction('products', 'readwrite').objectStore('products')
    productStore.add({id: 'p1', title: 'A first product'})
  }

}

dbRequest.onsuccess = function(event){

  db = event.target.result;

}

dbRequest.onerror = function(error){
  
}


storeBtn.addEventListener('click', () => {

  if(!db){
    return
  }
  const productStore = db.transaction('products', 'readwrite').objectStore('products')
    productStore.add({id: 'p1', title: 'A first product'})
});

retrBtn.addEventListener('click', () => {

});