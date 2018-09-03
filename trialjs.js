function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "http://www.omdbapi.com/?i=tt3896198&apikey=9244781f&t=Ironman&plot=full&r=xml", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
    <button type="Search" onclick="UserAction()">Search</button>
}