document.head.innerHTML = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">"
+ "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>"
+ "<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>"
+ "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>"

function nav_item(href, text) {
    return "<li class=\"nav-item\"><a class=\"nav-link\" href=\"" + href + ".html\">" + text + "</a></li>"
};

document.body.innerHTML =
  "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">"
+ "<a class=\"navbar-brand\" href=\"index.html\"><img src=\"./public/img/logo.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Blair Witch Season 2 - Episode 4</a>"
+ "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"
+ "<span class=\"navbar-toggler-icon\"></span></button>"
+ "<div class=\"collapse navbar-collapse\" id=\"navbarNav\">"
+ "<ul class=\"navbar-nav\">"
+ nav_item("p1", "Letter from Ed")
+ nav_item("p2","Wanted Poster")
+ nav_item("p3","Witch Hunting Manuscript")
+ nav_item("p4","Letter to Wife")
+ nav_item("p5","Finger Bone")
+ nav_item("p6","Casting Call Poster")
+ nav_item("p7","James's Notebook")
+ nav_item("p8","Flare Gun Package")
// + nav_item("p9","Survival Guide")
+ "</ul></div></nav>"

// Set current page as active
navbar_elems = document.getElementsByClassName('nav-link');
for (var i = 0; i < navbar_elems.length; i++){
    if(navbar_elems[i].href == window.location.href){
        navbar_elems[i].parentElement.classList.add("active");
        break
    }
}

window.onload = function () {
    setTimeout(function() {
        document.body.style.display = "";        
    }, 200);
}