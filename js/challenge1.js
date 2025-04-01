
document.addEventListener('dblclick', function(){
    const date = new Date();

    console.log("double clicked.");
    alert(date.toLocaltimeString());
})