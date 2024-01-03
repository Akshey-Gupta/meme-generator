const generatebtn=document.querySelector('.generate-meme-btn');
const memeImg=document.querySelector('.meme-generator img');
const title=document.querySelector('.meme-title');
const author=document.querySelector('.meme-author');

generatebtn.addEventListener('click',generatmeme);

function generatmeme(){
    fetch("https://meme-api.com/gimme/IndianDankMemes").then((Response)=>Response.json()).then(()=>{
        updateDetails(data.url, data.title, data.author)
    });
}
function updateDetails(murl,mtitle,mauthor){
    memeImg.setAttribute("src",murl);
    title.innerHTML=mtitle;
    author.innerHTML=mauthor;
}