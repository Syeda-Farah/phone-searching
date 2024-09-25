// displaying the fetched documents 
const foundData = async(searchText) => {
 const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data =  await res.json()
  const phones =  data.data;
showEach(phones);
}

foundData('iphone');


// 
// taking each elements from the phones

const showEach = (phones) => {
  const phoneContainer = document.getElementById('phone-card')
phoneContainer.textContent = ''
 phones.forEach(phone => {
 console.log(phone)
 const newDiv = document.createElement('div');
 newDiv.classList = `card bg-base-100 w-10/12 p-7 shadow-xl grid-cols-2`;

 newDiv.innerHTML = `
   <figure>
        <img
          src="${phone.image}"
          alt="Shoes" />
   </figure>
  <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>${phone.slug}</p>
         <div class="card-actions justify-end">
         <button onclick= "openModal('${phone.slug}')" class="btn btn-primary">Show More!</button>
        </div>
      </div>`
  phoneContainer.appendChild(newDiv);
});
loadingSpinner(false)
}


// searchbar dynamic
const handleSearch = () => {
  loadingSpinner(true);
  const searchFeild = document.getElementById('search-text');
  const searchText = searchFeild.value;
  console.log(searchText);
  foundData(searchText);
 
}
// loading spinner
const  loadingSpinner = (isLoading) => {
  const spinner = document.getElementById('spinner');
  if(isLoading){
    spinner.classList.remove('hidden')
  }
  else{
    spinner.classList.add('hidden')
  }
}

// open modal
const openModal = async (id) =>{
 const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}
`)
const data =  await  res.json();
const phones = data.data
console.log(phones);
showDetails(phones)

}

// show details on the modal


const showDetails = (phones) => {
  

  const phoneName = document.getElementById('phone-name');
  phoneName.innerText = phones.name
  const phoneDetails = document.getElementById('phone-details')
  phoneDetails.innerHTML = `
   <img class = "  items-center pt-8" src = "${phones.image}"  /> <div class = "text-left p-5" >
     <h1> <span class = "font-bold">    Brand: </span>   ${phones.brand} </h1> <h1> <span class = "font-bold">  Phone detail:  </span> ${phones.slug} </h1> 
  <h1> <span class = "font-bold">    Release date: </span>   ${phones.releaseDate} </h1>  
   <h1> <span class = "font-bold">    Storage </span>   ${phones.mainFeatures.storage} </h1> 
<h1> <span class = "font-bold">   Display Size: </span>   ${phones.mainFeatures.displaySize} </h1> 


<h1> <span class = "font-bold">   Memory: </span>   ${phones.mainFeatures.memory} </h1> 
  </div>
  
`
  my_modal_5.showModal();
  loadingSpinner(false)
 
}

// add spinnerq to the  modal
const loadSpinner = () => {
const modalBox = document.getElementById('my_modal_5')
loadingSpinner(true)

}