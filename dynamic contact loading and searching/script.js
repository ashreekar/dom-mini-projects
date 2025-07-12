let userContainer=document.querySelector('.userContainer');
let searchInput=document.querySelector('#searchInput');

const arr=[
    {
        profileUrl:'img2.jpg',
        name:'Mukyamantri Chandru',
        email:'chandru@actor.com'
    },
      {
        profileUrl:'img3.jpg',
        name:'Saadhu Kokila',
        email:'saadhu@director.com'
    },
      {
        profileUrl:'img2.jpg',
        name:'Doddanna the Boss',
        email:'dodanna@comedy.com'
    },
     {
        profileUrl:'img1.jpg',
        name:'Kashinath',
        email:'kashinath@double.com'
    },
     {
        profileUrl:'img2.jpg',
        name:'Jaggesh Mandya',
        email:'jaggesh@hallimaga.com'
    },
     {
        profileUrl:'img3.jpg',
        name:'Sharan Adyaksha',
        email:'sharan@rambo.com'
    },
     {
        profileUrl:'img3.jpg',
        name:'Komal Kumar',
        email:'komal@jaggesh.com'
    }
]

function renderUsers(arr){
    userContainer.innerHTML=''

    if(arr.length == 0){
         userContainer.innerHTML='No users available for this search result'
    }
    arr.map((item)=>{
    let {profileUrl,name,email}=item;
    let element=document.createElement('div');
    element.innerHTML=`<div class="image">
                    <img src="${profileUrl}" alt="error loading image">
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>`;
    element.classList='userItem';
    userContainer.appendChild(element);
});
}

renderUsers(arr);

function handleSearch(e){
    // console.log(searchInput.value)
    // console.log(e.target.value)

    let searchValue=e.target.value;
    searchValue=searchValue.toLowerCase();

   let filtered=arr.filter((item)=>{
    return item.name.toLowerCase().includes(searchValue) || item.email.toLowerCase().includes(searchValue);
   })

   renderUsers(filtered);
}

searchInput.addEventListener('input',handleSearch);