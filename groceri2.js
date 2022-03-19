

function addItems() {
	var ajoute = document.querySelector('#ent').value;
	var lis = document.querySelector('#appe2');
    var appl = document.querySelector('#afteradd');
   var mess = document.querySelector('#wrong');
   var applt = document.querySelector('#afterremove');
  

	if (ajoute==='') {
         mess.style.display = 'block';
         setInterval(function(){
         	mess.style.display = 'none'
         }, 3000)

	} else {
		var nos = document.createElement('li');
		 nos.innerHTML = ajoute + "<button class='logs'>X</button> <div class='logs-after'></div>"
         lis.appendChild(nos);
         document.querySelector('#ent').value = '';

    // showMessage();

        nos.className = 'mystyle';

        appl.innerHTML = ajoute + " added to Items"
        appl.style.display = 'block';
	    
	    setInterval(function() {
		   appl.style.display = 'none'
	    }, 3000)
	}

	let delet = document.getElementsByClassName('logs');

    Array.prototype.slice.call(delet).forEach(function(iteme) {
	iteme.addEventListener("click", function(e){
		e.target.parentNode.remove() 

        applt.innerHTML = `${ajoute} removed from Items`
        applt.style.display = 'block';
	    
	    setInterval(function() {
		   applt.style.display = 'none'
	    }, 3000)

	});
  })

}	    




function removeItems() {
	const ajoute = document.querySelector('#ent').value;
    const lis = document.querySelector('#appe');
    lis.innerHTML = ''

    const messi = document.querySelector('#correct');

	if (lis.innerHTML==='') {
         messi.style.display = 'block';
         setInterval(function(){
         	messi.style.display = 'none'
         }, 3000)
	} else {
		messi.style.display = 'none';
	}
}