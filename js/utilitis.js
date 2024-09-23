function getText(id){
    let value = document.getElementById(id).textContent;
    return parseFloat(value);
}
function getAmount(id){
    let value = document.getElementById(id).value;
    return value;
}
