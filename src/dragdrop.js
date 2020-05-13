const items = document.querySelectorAll('.items .item');
const dropzones = document.querySelectorAll('.dropzone');
console.log(items, dropzones);

let selectedItem = null;
const HOVERED = 'hovered';

dropzones.forEach(function(zone) {
    zone.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('id',e.target.id);
    });

    zone.addEventListener('dragleave', function(e) {

        const {target} = e;
        if (this == target) {
            this.classList.remove(HOVERED);
        }
        

        if (target.className.includes('dropzone')) {
            return true;
        } else {
            return false;
        }

    });

    zone.addEventListener('dragover', function(e) {
        e.preventDefault();

        const { target } = e;
        
        // allRemoveHover();
        this.classList.add(HOVERED);
        

        if (target.className.includes('dropzone')) {
            return true;
        } else {
            return false;
        }

    });

    zone.addEventListener('drop', function(e) {
        
        allRemoveHover();
        const id = e.dataTransfer.getData('id');
        const item = document.getElementById(id);
        this.querySelector('ul').append(item);

    });

});

const allRemoveHover = () => {
    dropzones.forEach(function(zone) {
        zone.classList.remove(HOVERED);
    })
}