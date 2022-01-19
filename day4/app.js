var images = document.querySelectorAll('.images img')
var prevBtn = document.querySelector('.prev ')
var nextBtn = document.querySelector('.next ')
var close = document.querySelector('.close ')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;
function showGallery(){
    if(currentIndex == 0){
        prevBtn.classList.add('hide');
    }else{
        prevBtn.classList.remove('hide');
    }
    if(currentIndex == images.length-1){
        nextBtn.classList.add('hide');  
    }else{
        nextBtn.classList.remove('hide');
    }
    galleryImg.src = images[currentIndex].src
        gallery.classList.add('show')

}
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index
        showGallery()

    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prevBtn.addEventListener('click',function(){
    if(currentIndex > 0)
    currentIndex--
    showGallery()
    console.log(currentIndex)

}
)

nextBtn.addEventListener('click',function(){
    if(currentIndex < images.length-1)
    currentIndex++
    showGallery()
    console.log(currentIndex)

}
)
