
let team1 = document.getElementById("team1")
let team2 = document.getElementById("team2")
let add1 = document.getElementById("add1")
let add2 = document.getElementById("add2")
let add3 = document.getElementById("add3")
let t2Add1 = document.getElementById("t2-add1")
let t2Add2 = document.getElementById("t2-add2")
let t2Add3 = document.getElementById("t2-add3")
let reset = document.getElementById("reset")
let finish = document.getElementById("finish")
let container = document.querySelector(".container")

let count = 0;
add1.addEventListener("click", ()=>{
    count++;
    team1.textContent = count;
})

add2.addEventListener("click", ()=>{
    count+=2;
    team1.textContent = count;
})

add3.addEventListener("click", ()=>{
    count+=3;
    team1.textContent = count;
})

let t2Count = 0;
t2Add1.addEventListener("click", ()=>{
    t2Count++;
    team2.textContent = t2Count;
})

t2Add2.addEventListener("click", ()=>{
    t2Count+=2;
    team2.textContent = t2Count;
})

t2Add3.addEventListener("click", ()=>{
    t2Count+=3;
    team2.textContent = t2Count;
})

let resetCount = () =>{
    team1.textContent = 0;
    team2.textContent = 0;
    count=0;
    t2Count = 0;
}

reset.addEventListener("click", resetCount)


finish.addEventListener("click", ()=>{
    let div = document.createElement("div");
        div.classList.add("winner");
        let close = document.createElement("span")
        close.textContent = "X"
        close.classList.add("close")

        div.append(close);
    if(count > t2Count){
        div.textContent=`Team 1 Wins score with ${count} 🎉🎊.
                        Team 2 looses with score ${t2Count}`

    }else if(count< t2Count){
        div.textContent=`Team 2 Wins score with ${t2Count}.
                        Team 1 looses with score ${count} 🎉🎊`
    }
    else{
        div.textContent=`Draw. Score of both ${count} 🟰`

    }
    container.appendChild(div);
    div.appendChild(close);
    close.addEventListener("click", ()=>{
        div.style.display = "none";
    })
    resetCount();
})
// let close = document.querySelector(".close")
// let winner = document.querySelector(".winner")

// close.addEventListener("click", ()=>{
//     winner.style.display = "none";
// })
let date = new Date();
let dateNow = document.getElementById("date");
dateNow.innerText = date.getDate() + "/" + date.getMonth()+ "/" + date.getFullYear();
// dateNow.textContent += " Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
