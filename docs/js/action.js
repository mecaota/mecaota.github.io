var clickNumber = 1;

function changeOpen(){
    clickNumber++;
    if((clickNumber%2)==0){
        document.getElementById("nav-menu").className="nav-right nav-menu is-active";
        document.getElementById("nav-toggle").className="nav-toggle is-active";
    }else{
        document.getElementById("nav-menu").className="nav-right nav-menu";
        document.getElementById("nav-toggle").className="nav-toggle";
    }
}

function changeLoading(id){
    document.getElementById(id).className="button is-success is-loading";
    setTimeout(function(){document.getElementById(id).className="button is-success";}, 5000);
}

function navPosition(){
    document.getElementById(id).className="nav has-shadow";
    setTimeout(function(){document.getElementById(id).className="nav fixed has-shadow";}, 5000);
}
