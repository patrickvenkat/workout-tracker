$("#newworkoutplan").on("click", function(event) {
    event.preventDefault();
    console.log("entered after submit inside work out plan index file");
    // console.log("user ID value" + $("#userIDtext").val());
  
    // var userID1 = $("#userIDtext").val();
  
    // console.log("Ready to make the get request");
    // console.log("IDs " + userID1);
    //   $.get("/api/getUser/" + userID1, function(data) {
    //     console.log("After the get request is complete");
    //     userResultsArray = data;
    //     console.log(userResultsArray);
        window.location.href = "./workout.html";
    //   });
  });