
function login()
{
    var b=document.getElementsByClassName('username').value;
    var k=document.getElementsByClassName('password').value;
    if(b=='world' && k=='123')
    {
        location.assign("new.html");
    }
    else{
        function show(){
            var b=window.alert("login failed");
            console.log(b);
        }
