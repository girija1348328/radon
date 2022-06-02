/*- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

//folder
//clone mam wale se
//git branch name hoga assignment/nodejs-modules
//git

Call all these functions in route.js inside the test-me route handler*/

const trim12 = function(){
    let text = "     Hello World!     ";
    let result = text.trim();
    console.log(result)
}

const changeL  = function(){
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    console.log(sentence.toLowerCase());

}

const changeU = function(){
    const sentence1 = "The quick brown fox jumps over the lazy dog.";
    console.log(sentence1.toLowerCase());
}

module.exports.trim123 = trim12
module.exports.changetoLowerCase =  changeL
module.exports. changetoUpperCase= changeU