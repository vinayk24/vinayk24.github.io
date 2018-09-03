Window.myobj;
 function myFunction()
            {
                var text = document.getElementById("ip").value;
                var image = document.getElementById("status");
                if(text !== "")
                {
                    image.src="./tick1.png";
                }
                else
                {
                    image.src="./tick2.svg";
                }
            }  function UserAction() {
                var xhttp = new XMLHttpRequest();
                var method = "POST";
                var data = "?i=tt3896198&apikey=9244781f&t=" + document.getElementById("ip").value + "&plot=full&r=json";
                var url = "http://www.omdbapi.com/" +Window.data;
                
                console.log(url);
                
               
                         localStorage.setItem("data",data);
                  
                       window.location="Movieinfo.html";
                               
            }
        
             