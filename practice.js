let pTag = document.querySelector("p");
// console.log(pTag)
let pWithID = document.querySelector("#para1");
// console.log(pWithID)
let allPTags = document.querySelectorAll("p")
console.log(allPTags)
// for(let i=0; i<allPTags.length; i++){
//     console.log(allPTags[i].textContent)
// }
// allPTags.forEach(p=>{
//     console.log(p.textContent)
//     console.log("<br>")
// })
// for(let para of allPTags){
//     console.log(para)
// }

// allPTags[3].textContent = "This content is set by JavaScript"

// allPTags.forEach(p=>{
//     // p.className = "myPara"
//     p.setAttribute('class','pTag')
//     p.setAttribute('id','unique')
//     console.log(p)
// })

// allPTags[2].id = "unique_element"
// allPTags[0].className = "first_element"
// allPTags[1].style.backgroundColor = "yellow"
// allPTags[1].style.color = "blue"
// allPTags[1].style.padding = "0.8em 1.5em "

// allPTags[2].style.backgroundColor = "orange"
// allPTags[2].style.color = "gray"
// allPTags[2].style.padding = "0.8em 1.5em "

// allPTags[3].style.backgroundColor = "darkblue"
// allPTags[3].style.color = "yellow"
// allPTags[3].style.padding = "0.8em 1.5em "

// allPTags[0].style.backgroundColor = "purple"
// allPTags[0].style.color = "red"
// allPTags[0].style.padding = "0.8em 1.5em "

// for(let i=0; i<allPTags.length; i++){
//     allPTags[i].className = "p_tags"
//     allPTags[i].textContent = "Content is set by JavaScript"
//     if(i!=0 && i!=2){
//         // allPTags[i].style.backgroundColor = "purple"
//         allPTags[i].style.color = "green"
//     }else{
//         allPTags[i].style.color = "red"
//     }
//     console.log(allPTags[i])
// }