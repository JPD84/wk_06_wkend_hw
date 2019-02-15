document.addEventListener('DOMContentLoaded',() => {

    const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

    const button = document.querySelector('#delete-btn')
    button.addEventListener('click', handleDeleteClick)
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