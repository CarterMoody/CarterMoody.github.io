const copyToClipboard = str => {
const el = document.createElement('textarea');
el.value = str;
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
};

const url ='';

document.getElementById('myItem').addEventListener('click', function(e){ 
let myUrl =  url + e.target.dataset.page_id;
copyToClipboard( myUrl );
alert(myUrl + ' copied to clipboard!')
});