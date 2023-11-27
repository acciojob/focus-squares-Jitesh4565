//your JS code here. If required.
function changeColor(event){
	let hoveredSquareId=event.target.id;

	let squares=document.querySelectorAll('.square');

	squares.forEach(function(square){
		if(square.id!==hoveredSquareId){
			square.style.backgroundColor='#6F4E37';
		}
	});
}
  function revertColor(event){
	  let squares=document.querySelectorAll('.square');
	  squares.forEach(function(square){
		  square.style.backgroundColor='#E6E6FA';
	  });
  }
  let squares=document.querySelectorAll('.square');
    squares.forEach(function(square){
	square.addEventListener('mouseover',changeColor);
	square.addEventListener('mouseout',revertColor);
	});
