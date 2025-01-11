
//  const changeText = ()=>{
//     if(document.querySelector('#myheader').innerText != 'Progamming Class'){
//         document.querySelector('#myheader').innerText = 'Progamming Class';
//         document.querySelector('#name').value = 'Something else';
//         document.querySelector('#email').value = 'anotheremail@gmail.com';
//         document.querySelector('#myheader').style.backgroumd = 'orange'
//     }else{
//         document.querySelector('#myheader').innerText = 'Js For Beginners';
//         document.querySelector('#name').value = '';
//         document.querySelector('#email').value = "";
//         document.querySelector('#myheader').style.backgroumd = '#cc';
//     }
//  }
// // Validate name input
// // const changeName = ()=>{
// //     if(document.querySelector('#name').value.length < 6){
// //         document.querySelector('.btn').style.background = 'red';
// //         document.querySelector('.msg').innerText = 'Invalid Characters';
// //     }else{
// //         document.querySelector('.btn').style.background = 'blue';
// //     }
// // }

// // // Validate email input

// // const changeEmail = ()=>{
// //     if(document.querySelector('#name').value.length < 6){
// //         document.querySelector('.btn').style.background = 'red';
// //         document.querySelector('.msg').innerText = 'Invalid Characters';
// //     }else{
// //         document.querySelector('.btn').style.background = 'blue';
// //     }
// // }
// // const changeName = ()=>{
// //     if(document.querySelector('#name').value.length < 6){
// //         document.querySelector('.btn').style.background = 'red';
// //         document.querySelector('.msg').innerText = 'Invalid Characters';
// //     }else{
// //         document.querySelector('.btn').style.background = 'blue';
// //     }
// // }

// // // Validate email input

// // const changeEmail = ()=>{
// //     if(document.querySelector('#name').value.length < 6){
// //         document.querySelector('.btn').style.background = 'red';
// //         document.querySelector('.msg').innerText = 'Invalid Characters';
// //     }else{
// //         document.querySelector('.btn').style.background = 'blue';
// //     }
// // }








// document.querySelector('#myheader').addEventListener('click', (event)=>{
//     changeText()
// })



// document.querySelector('.darkmode').addEventListener('click', (e)=>{
//     document.querySelector('body').classList.add('.bg-dark');
// })



// document.querySelector('.container').addEventListener('click', (e)=>{
//     document.querySelector('body').classList.remove('.bg-dark');
// })


// const name = document.querySelector('#name');


// const email = document.querySelector('#email');


// const validateInput = ()=>{
//     if(document.querySelector('#name').value.length < 6  || document.querySelector('#email').value.length < 6){
//         document.querySelector('.btn').style.background = 'red';
//         document.querySelector('.msg').innerText = 'Invalid Characters';


//         document.querySelector('.btn').setAttribute('disbled', '');


//     }else{
//         document.querySelector('.btn').style.background = 'blue';
//         document.querySelector('.msg').innerText =  '';

//         document.querySelector('.btn').removeAttribute('disbled')
//     }
// }




// name.addEventListener('input', (e)=>{
//     validateInput();
// });


// email.addEventListener('input', (e)=>{
//     validateInput();
// });

// // const changeBtnText = ()=> {
// //     document.querySelector('.btn').style.background = 'blue'
// // }

// // document.querySelector('.adduser').addEventListener('click', (e)=>{
// //     document.querySelector('.btn').style.background = 'blue'
// // });




// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     console.log('Button Clicked');

//     console.log(event.target.value)
// });




6
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const userList = document.querySelector('#users');






myForm.addEventListener('submit', (e)=>{
    e.preventDefault();



if(nameInput.value === '' || emailInput.value === ''){
    // alert('Field cannot be empty');
    msg.innerHTML('Field cannot be empty');
    msg.classList.add('error');
    

    setInterval(()=>{
        msg.remove();
    }, 3000)
}else{

    // Creat Element
    const li = document.createElement('li');


    li.innerHTML = `${nameInput}: ${emailInput.value}`;

    userList.appendChild(li);


    nameInput.value = '';
    emailInput.value = '';

}
    
}); 