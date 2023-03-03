function find(id){
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

  contactList.forEach(function (value){
      if(value.id == id){
         document.getElementById('id').value = value.id
         document.getElementById('name').value = value.name
         document.getElementById('cpf').value = value.cpf
         document.getElementById('email').value = value.email
         document.getElementById('phone').value = value.phone
      }
  })
}