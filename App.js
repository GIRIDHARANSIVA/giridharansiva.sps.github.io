const cc = document.getElementById('computer-choice')
const uc = document.getElementById('user-choice')
const res = document.getElementById('result')
let userchoice,comchoice,Result
const possibleChoice = document.querySelectorAll('button')
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click' ,(e) =>{
	userchoice=e.target.id
	uc.innerHTML=userchoice 
	generateComputerChoice()
	getresult()
}))
function generateComputerChoice(){
	const randomnum=Math.floor(Math.random() * 3 + 1)
		
	if(randomnum===1){
		comchoice='rock'
	}else if(randomnum===2){
		comchoice='paper'
	}else if(randomnum===3){
		comchoice='scissor'	
	}
	cc.innerHTML=comchoice

}

function getresult(){
	if(comchoice===userchoice){
		Result='Its a Draw'
	}
	if(comchoice==='rock' && userchoice==='paper'){
		Result='you win'
	}
	if(comchoice==='scissor' && userchoice==='paper'){
		Result='you lost'
	}
	if(comchoice==='paper' && userchoice==='rock'){
		Result='you lost'
	}
	if(comchoice==='rock' && userchoice==='scissor'){
		Result='you lost'
	}
	if(comchoice==='scissor' && userchoice==='rock'){
		Result='you win'
	}
	if(comchoice==='paper' && userchoice==='scissor'){
		result='you win'
	}
	res.innerHTML=Result
}