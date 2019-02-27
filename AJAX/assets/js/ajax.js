const req = new XMLHttpRequest;
req.open('GET','https://thatsthespir.it/api',true);
req.onload = function(){
    if(this.status===404){
        alert('An error occured')
    }
    else if(this.status===200){
        document.getElementById('quote').innerHTML = JSON.parse(this.responseText).quote;
        document.getElementById('author').innerHTML = JSON.parse(this.responseText).author;
        document.getElementById('Id').innerHTML = JSON.parse(this.responseText).id;
        document.getElementById('permalink').innerHTML = JSON.parse(this.responseText).permalink;
        document.getElementById('image').setAttribute("src",JSON.parse(this.responseText).photo);
        
    }
    
}

req.send();     

