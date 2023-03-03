//method to save data into localstorage
function save(){

  contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
  var id
  contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

  if(document.getElementById('id').value){

      //edit contactlist array based on value
      contactList.forEach(value => {
          if(document.getElementById('id').value == value.id){
              value.name      = document.getElementById('name').value, 
              value.age       = document.getElementById('cpf').value, 
              value.address   = document.getElementById('email').value, 
              value.phone     = document.getElementById('phone').value
          }
      });

      //remove hidden input
      document.getElementById('id').value = ''

  }else{

      //save
      //get data from form
      var item = {
          id        : id + 1, 
          name      : document.getElementById('name').value, 
          cpf       : document.getElementById('cpf').value, 
          email   : document.getElementById('email').value, 
          phone     : document.getElementById('phone').value
      }

      //add item data to array contactlist
      contactList.push(item)
  }

  // save array into localstorage
  localStorage.setItem('listItem', JSON.stringify(contactList))

  //update table list
  allData()

  //remove form data
  document.getElementById('form').reset()
}