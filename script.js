const container = document.querySelector('#container');
const sizetOfGrid = document.querySelector('#sizeOfGrid');
const colorOfBackground = document.querySelector('select');
const btn = document.querySelector('#reset');


sizeOfGrid.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (Number(e.target.value) >= 1 && Number(e.target.value <= 128)) {
        container.setAttribute('style', `grid-template-columns: repeat(${Number(e.target.value)}, 1fr); grid-template-rows: repeat(${Number(e.target.value)}, 1fr)`);
        } else {
            alert('values need to be between 1 to 64');
        }
        for (i = 0; i < Number(e.target.value) * Number(e.target.value); i++) {
            let div = document.createElement('div');
            div.setAttribute('id', i);
            div.setAttribute('class', 'littleSquare')
            div.setAttribute('style', 'border: 1px solid black')
            container.appendChild(div);
        }
    
        function changeBackground(e) {
            switch (true) {
                case (colorOfBackground.value === 'green'):
                    e.target.style.backgroundColor = 'green';
                    break;
                case (colorOfBackground.value === 'red'):
                    e.target.style.backgroundColor = 'red';
                    break;
                case (colorOfBackground.value === 'blue'):
                    e.target.style.backgroundColor = 'blue';
                    break;
                case (colorOfBackground.value === 'yellow'):
                    e.target.style.backgroundColor = 'yellow';
                    break;
                case (colorOfBackground.value === 'pink'):
                    e.target.style.backgroundColor = 'pink';
                    break;
            }
        }
        
        const littleSquares = document.querySelectorAll('.littleSquare');
        littleSquares.forEach(littleSquare => littleSquare.addEventListener('mouseenter', changeBackground));
    
        
    } else {
        for (i = 0; i < 64*64; i++) {
            try{
                let div = document.querySelector('.littleSquare');
                container.removeChild(div);
            } catch(TypeError) {
                return;
            }
        }
    };
    
})

btn.addEventListener('click', (e) => {
    let container = document.getElementById('container');
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
})
