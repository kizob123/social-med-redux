let remLc =function(){
    return new Promise((resolve, reject) => {
    localStorage.removeItem('loggein')
    if (!JSON.parse(localStorage.getItem('loggein'))) {
        
        resolve(true)
    }
    else{
        resolve(false)
    }
})
}

export default remLc