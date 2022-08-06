const str="     hello everyone      "
function trim(){
  console.log(str.trim());
}


const str0 ="ALL THINGS ARE SMALL"
function lower(){
    console.log(str0.toLowerCase());
}
const str1="we follow mam instruction"
function upper(){
    console.log(str1.toUpperCase())
}
trim();
lower();
upper();

 module.exports.pencil=trim
 module.exports.pencil=lower
 module.exports.pencil=upper