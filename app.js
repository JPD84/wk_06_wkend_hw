document.addEventListener('DOMContentLoaded',() => {
    // console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

    const button = document.querySelector('#delete-btn')
    button.addEventListener('click', handleDeleteClick)
});

const handleFormSubmit = function(event){
    event.preventDefault()
  
    const listElement = document.createElement('li');
  
    first_name.textContent = this.first_name.value;
    listElement.appendChild(first_name);

    const last_name = document.createElement('p');
    title.textContent = this.last_name.value;
    listElement.appendChild(last_name);
  
    const board_brand = document.createElement('p');
    author.textContent = this.author.value;
    listElement.appendChild(board_brand);
  
    const sponsor = document.createElement('p');
    category.textContent = this.sponsor.value;
    listElement.appendChild(sponsor);
  
    const readingList = document.querySelector(`#professional-skateboarders`);
    readingList.appendChild(listElement);
  
    this.reset();
  }
  
    const handleDeleteClick = function(){
    const readingList = document.querySelector('#professional-skateboarders');
    readingList.innerHTML = '';