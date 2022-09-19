const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';


// ========= async func ========
// export const getApiResource = async (url) => {
    
//     try {
//         const res = await fetch(url);

//         console.log(res.ok)

//         if(!res.ok) {
//             console.error('Could not fetch', res.status );
//             return false;
//         }

//         return await res.json();

//         // const body = await res.json();
//         // console.log(body);
//         // return body;
//     } catch (error) {
//         // console.error('Could not fetch', error.message);
//         // return false;
//     }

// }; 




// (async () => {
//     const body = await  getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })()


// ======== axios ======
const axios = require('axios');

axios.get(SWAPI_ROOT)
    .then(function (responce) {
        console.log(responce);
    })





// ====== fetch =====

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body)) 



// with fetch
// export const getApiResource = () => {
    // fetch(SWAPI_ROOT+SWAPI_PEOPLE)
    //     .then(res => res.json())
    //     .then(body => console.log(body) )
    //     .catch(error => console.log(error.message ))
// };
// getApiResource();