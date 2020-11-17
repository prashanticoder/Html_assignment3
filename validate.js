function validateBookForm() {
    var title= document.getElementById("titleId").value.trim(); //trim for empty spaces
    var author = document.getElementById("authorId").value.trim();
    if (title==""){
      document.getElementById("titleMsg").innerHTML="enter Book Title";
      document.getElementById("titleMsg").style.color="red";
       return false;
    }
    if(author==""){
        document.getElementById("authorMsg").innerHTML="enter Author name";
        document.getElementById("authorMsg").style.color="red";
        return false;
    }

    return alert("form submitted successfully");
}