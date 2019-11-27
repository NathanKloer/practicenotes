(function(){

    // let myAjaxBtn = document.getElementById("getData");

    // myAjaxBtn.addEventListener("click", function(){
    //     let xhttp = new XMLHttpRequest();

    //     xhttp.onreadystatechange = function(){
    //         if(this.readyState == 4 && this.status == 200){
    //             let myJsonFormat = JSON.parse(xhttp.responseText);
    //             console.log(myJsonFormat);
    //         }
    //     }

    //     xhttp.open("GET", "https://whateveriwant-84e4b.firebaseio.com/people.json", true,);
    //     xhttp.send();
    // });

    let $myAjaxBtn = $("#getData");
    let $post = $("#postData");
    let $delete = $("#deleteData");
    let $patch = $("#patchData");
    let $put = $("#putData");

    let firebaseUrl = "https://whateveriwant-84e4b.firebaseio.com/people/";
    let jsonExt = ".json";

    $myAjaxBtn.click(function(){
        $.ajax({
            type:"GET",
            url:`${firebaseUrl}${jsonExt}`,
            success: function(data){
                console.log(data);
                for(let i = 0; i < data.length; i++){
                    console.log(data[i].name);
                }
            },
            error: function(error){
                console.log("There was an error, Read: " + error);
            }
        });
    });


    //POST IS USED FOR LOGINS A LOT
    $post.click(function(){
        $.ajax({
            type:"POST",
            url:`https://whateveriwant-84e4b.firebaseio.com/people/.json`,
            data: JSON.stringify(
                name = {
                    "name": "Jerry",
                    "age": 24,
                }
            ),
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            }

        });
    });
    $delete.click(() => {
        $.ajax({
            url: `${firebaseUrl}2/${jsonExt}`,
            type: "DELETE",
            success: () =>{
                console.log('data was deleted');
            },
            error: (error)=> {
                console.log(error);
            }
        });
    });

    $patch.click(() => {
        $.ajax({
            url: `${firebaseUrl}${jsonExt}`,
            type: "PATCH",
            data: JSON.stringify({
                "name": "Michael",
                "age": 150
            }),
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            }
        });
    });
    $put.click(() => {
        $.ajax({
            url: `${firebaseUrl}${jsonExt}`,
            type: "PUT",
            data: JSON.stringify({
                "Ana": {
                    "name": "Ana",
                    "age": 3
                }
            }),
            success: data => {
                console.log(data);
            },
            error: (error) =>{
                console.log(error);
            }
        });
    });

})();