/*printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - ‘Thorium, W3D1, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler*/

    const Date1 = function(){
        const d = new Date()
        console.log("the date is : "+d)
    }

    const Month1 = function(){
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const m = new Date()
        let name = month[m.getMonth()];
        console.log('the month is :'+name)
    }

    const batch = function(){
        console.log("Radon,W2D3,the topic for today is Nodejs module systes")
    }

    module.exports.printDate = Date1
    module.exports.printMonth = Month1
    module.exports.getBatchInfo = batch
