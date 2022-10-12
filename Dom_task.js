let time = new Date();

function generateRandomColor(){
    let hexList = 'ABCDEF123456789';
    let timerColor = "#";
    let yearColor = '#';
    for(let i=0; i<6; i++){
        // console.log(hexList[i]);
        timerColor += hexList[Math.floor(Math.random()*15)]
        yearColor += hexList[Math.floor(Math.random()*15)]
    }
    let timer_bg = document.querySelector(".bg-random-color"),
    year_bg = document.getElementById("year");
    timer_bg.style.backgroundColor = timerColor;
    year_bg.style.color = yearColor;
    // setTimeFormate()
}


// function setTimeFormate(){    
    setInterval(() => {
        let time = new Date(),
        hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds(),
        date = time.getDate(),
        month = time.getMonth()+1,
        year = time.getFullYear();
        if(month==1){
            month = "January"
        }else if(month==2){
            month = "February"
        }else if(month==3){
            month = "March"
        }else if(month==4){
            month = "April"
        }else if(month==5){
            month = "May"
        }else if(month==6){
            month = "June"
        }else if(month==7){
            month = "July"
        }else if(month==8){
            month = "August"
        }else if(month==9){
            month = "September"
        }else if(month==10){
            month = "October"
        }else if(month==11){
            month = "November"
        }else{
            month = "December"
        }
    
        let fulltime = `${month} ${date}, ${year} ${hour}:${minute}:${second}`
        let timer = document.getElementById("timer-section")
        timer.innerHTML = fulltime;
        generateRandomColor()
        setParagraphColor()

    },700);


    function setParagraphColor(){
        let paras = document.querySelectorAll(".para");
        for(let i=0; i<paras.length; i++){
            // console.log(paras[i])
            if(i<1){
                paras[i].style.backgroundColor = "#48c248e1"
            }else if(i<2){
                paras[i].style.backgroundColor = "#e7e74ed5"
            }else{
                paras[i].style.backgroundColor = "#db5454bb"
            }
        }
    }
