//  let local = {
//      loggedIn: false,
//      password: '',
//      email: ''
//  }
//  if (localStorage.getItem('loggein'))
//      local = JSON.parse(localStorage.getItem('loggein'))

let lc = function (){
     return new Promise((resolve, reject) => { 
         console.log(JSON.parse(localStorage.getItem('loggein')))
         if (JSON.parse(localStorage.getItem('loggein')))
         resolve(JSON.parse(localStorage.getItem('loggein')))

      })
}

export default lc