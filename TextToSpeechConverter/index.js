const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if(!synth.speaking && text){
        const utternace = new SpeechSynthesisUtterance (text);
        synth.speak(utternace);
    }

    if(text.length>50){
        if(synth.speaking && isSpeaking){
            button.innerHTML="Pause";
            synth.resume();
            isSpeaking=false;
        }else{
            button.innerHTML="Resume";
            synth.pause();
            isSpeaking=true;
        }
    }else{
        isSpeaking=true;
        button.innerText="Speaking";
    }

    setInterval(()=>{
        if (!synth.speaking && !isSpeaking) {
            isSpeaking=true;
            button.innerText="convert to speech";
        }
    });
};


button.addEventListener("click",textToSpeech);