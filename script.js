// når brugeren trykker på menubutton:
// skift/toggle klassen "hidden" på nav:

$(window).on("load", sidenVises);

function sidenVises(){
    console.log("tryk på menubutton")
    $(".menubutton").on("click", trykPåMenubutton);
}

function trykPåMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}


