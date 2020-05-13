const items = document.querySelectorAll('.items .item');
const dropzones = document.querySelectorAll('.dropzone');
console.log(items, dropzones);

let selectedItem = null;

// itemss.forEach(function(item) {

//     item.addEventListener()
// });

dropzones.forEach(function(zone){
    zone.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('id',e.target.id);
        // console.log('dragstart');
    });

    zone.addEventListener('dragenter', function(e) {

        console.log('enter',e)
        // if(!this.querySelector('.temp-item')) {
            const tempItem = document.createElement('li');
            tempItem.classList.add('item');
            tempItem.classList.add('temp-item');
            this.querySelector('ul').append(tempItem);
        // }
    },false);

    zone.addEventListener('dragleave', function(e) {
        e.stopPropagation();
        e.preventDefault();

        console.log(e, e.fromElement);
        if(!e.fromElement.className.includes('dropzone')) {
            return false;
        }

        removeTempItem(this);

    }, false);
    zone.addEventListener('dragover', function(e) {
        const { className } = e.target;
        
        
    }, false);

    zone.addEventListener('drop', function(e,a) {
        e.stopPropagation();
        e.preventDefault();
        
        const id = e.dataTransfer.getData('id');
        const item = document.getElementById(id);
        this.querySelector('ul').append(item);

    }, false);

});

const removeTempItem = (el) => {
    let tempItem = el.querySelector('.temp-item');
    if (tempItem) {
        tempItem.remove();
    }
}