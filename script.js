/*function signature/sample */
function newPrice(currentPrice , discount ) {
    //    first i check input zemon eita number kina and eita discount kina .zodi kunota na hoy taile invalid hobe

if(typeof currentPrice!=="number" || typeof discount !== "number" ){
    return "Invalid";
}
//  ekhon dekhbo ze discount ta 0 er theke suto kina or discount ta 100 er ceye beshi ki na . holei mama tumi cot , invalid hoye zao 

if(discount < 0 || discount >100){
    return "Invalid";
}
//  ekhon amaferke discount amout ber korte hobe and final price ta ber korte hobe 
const discountAmount = (currentPrice * discount / 100);
const finalPrice = currentPrice - discountAmount;
// 3 ta digit dekhate hobe point er por taile to.fixed use hobe 
return finalPrice.toFixed(3);
}


/*function signature/sample */
function validOtp(otp) {
    // input zodi sotik format e na thake taile invlid return korbe tiale kaj holo type of check kora 
    if(typeof otp !== "string"){
        return "Invalid";
    }
//   otp 8 character hoite hobe string na hoile invalid return korbe emonki ph- diye shuru korte hobe easy way hocce startWith method use kora
 
if(otp.length !==8 || !otp.startsWith("ph-") ){
    return false;
}
return true;
}



function finalScore(obj) {
//    amora dekhbo object ki string ki na and dekhbo array ki na 

if (typeof obj !== "object" || obj === null  || Array.isArray(obj)){
    return "Invalid";

}
// er porer kaj holo right wrong skip  ta ki string ki na dekhbo and condition holo right wrong skip 100 hoite hobe na hole invalid dibe 
const {right, wrong , skip} = obj;
if (typeof right !== "number" || typeof wrong !== "number"|| typeof skip !== "number") {
    return "Invalid"
}

if (right + wrong + skip !== 100) {
    return "Invalid"; }

// score ber korte hobe 

const score = right - (0.5 * wrong) ;

//  point er kasakasi man anar jono ekhon use korte hobe Math.round 

return Math.round (score);

}


function gonoVote(votes){
    // fist kaj holo aray kina dekhte hobe 
    if(!Array.isArray(votes)){
      return "Invalid";
    }
    let haCount = 0;
    let naCount = 0;

    // ekhon condition dite hobe 
    for(const vote of votes){
      if (vote === "ha"){
        haCount++;
      }
      else if(vote === "na"){
        naCount++;
      }
    }
    if(haCount === naCount){
      return "equal"
    }
    else if(haCount > naCount){
      return true;
    }
   else {
    return false;
   }
}



function analyzeText(str){
    // kaj holo string kina check korte hobe 
 if(typeof str !== "string"){
    return "Invalid";
 }
// kisu likha ase kina check korte hobe
if(str.trim().length === 0){
    return "Invalid";
} 
const words = str.split ("");
let longestword = " ";
// ekhon world lenght check korte hobe 

for(const word of words){
    if(word.length > longestword.length){
        longestword = word ;
    }
}
const token = str.split ("").join("").length;
return {
    longwords: longestword ,
    token :token
};
}