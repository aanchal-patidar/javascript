
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // true,false  -> event propagation
    // true -> event capturing // parent(outer tag) then child(inner tag)
    //false -> event bubbling  // child(inner tag) then parent(outer tag)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()   // it execute only child
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();  // it stops the data going to the database
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)