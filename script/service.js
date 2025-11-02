
const textarea = document.getElementById('textarea');

textarea.addEventListener('input',function(){
    this.style.height= 'auto';
    this.style.height = textarea.scrollHeight+'px';
}())