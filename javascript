console.log("I'm running");
document.getElementById('searchbutton').addEventListener('click', function(){
const searchterm=document.getElementById('searchinput').value;
if(searchterm){
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchterm}`)
    .then(response=>response.json())
    .then(data=>{
 const resultdiv=document.getElementById('results');
 resultdiv.innerHTML='';
 data.query.search.forEach(result=> {
const resultElement= document.createElement('div');
resultElement.innerHTML=`<a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank"><h3>${result.title}</h3><p>${result.snippet}</p></a>`;
resultdiv.append(resultElement);
 });
    })
    .catch(error => console.error('Error:', error));
}
});
