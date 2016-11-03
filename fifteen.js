var puzzlePiece;


window.onload = function()
{
    var puzzleArea = document.getElementById('puzzlearea');
    
    puzzlePiece = puzzleArea.getElementsByTagName('div');

    for (var i=0; i<puzzlePiece.length; i++)
    {
        puzzlePiece[i].style.backgroundImage="url('background.jpg')";
        puzzlePiece[i].className = 'puzzlepiece';
        puzzlePiece[i].style.left = (i%4*100) + 'px';
        puzzlePiece[i].style.top = (parseInt(i/4)*100) + 'px';
        puzzlePiece[i].style.backgroundPosition= '-' + puzzlePiece[i].style.left + ' ' + '-' + puzzlePiece[i].style.top;
        
        puzzlePiece[i].onclick = function()
        {
           
                moveTile(parseInt(this.innerHTML-1));
                return;  
        };

        puzzlePiece[i].onmouseover = function()
        {
                
                this.classList.add('movablepiece');
          
        };

        
    }


};

/*This function moves a tile*/
function moveTile(tile)
{
    var temp = puzzlePiece[tile].style.top;
    puzzlePiece[tile].style.top = blankY;
    blankY = temp;

    temp = puzzlePiece[tile].style.left;
    puzzlePiece[tile].style.left = blankX;
    blankX = temp;
}






