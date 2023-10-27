
function show(value){
    
    document.getElementById('text-area').value+=value;
}
function evaluateExpression(){
    const expression1=document.getElementById('text-area').value;
    const result=eval(expression1);
    document.getElementById('text-area').value=result;
}
function wholedelete(){
    document.getElementById('text-area').value='';
}
function deleteLast(){
    const text=document.getElementById('text-area');

    const currValue=text.value;
    text.value=currValue.slice(0,-1);

}
document.addEventListener('keydown', function(event) {
    if (event.key === "=" || event.key ==="Enter") {
        event.preventDefault();
        evaluateExpression(); 
    }
});
