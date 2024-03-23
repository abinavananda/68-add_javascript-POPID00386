var name = prompt("Please enter your name:");
if (name != null && name != "") {
    document.write("<h1>Hello, " + name + "!</h1>");
} else {
  
    document.write("<h1>Hello, Guest!</h1>");
}