document.addEventListener('DOMContentLoaded',() => {

  const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#delete-btn')
  button.addEventListener('click', handleDeleteClick)

  // var form = document.querySelector("form");
  // var log = document.querySelector("#skateboarder_rank");
  
  // form.addEventListener("submit", function(event) {
  //   var data = new FormData(form);
  //   var output = "";
  //   for (const entry of data) {
  //     output = entry[0] + "=" + entry[1] + "\r";
  //   };
  //   log.innerText = output;
  //   event.preventDefault();
  // }, false);

});

const handleFormSubmit = function(event){
  event.preventDefault()
  

  const listElement = document.createElement('li');

  const first_name = document.createElement('p');
  first_name.textContent = this.first_name.value;
  listElement.appendChild(first_name);

  const last_name = document.createElement('p');
  last_name.textContent = this.last_name.value;
  listElement.appendChild(last_name);

  const board_brand = document.createElement('p');
  board_brand.textContent = this.board_brand.value;
  listElement.appendChild(board_brand);

  const sponsor = document.createElement('p');
  sponsor.textContent = this.sponsors.value;
  listElement.appendChild(sponsor);

  const professionalSkakeboarders = document.querySelector(`#professional-skateboarders`);
  professionalSkakeboarders.appendChild(listElement);
  

  this.reset();
}
  const handleDeleteClick = function(){
  const professionalSkakeboarders = document.querySelector('#professional-skateboarders');
  professionalSkakeboarders.innerHTML = '';
  }

 