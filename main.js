var album=["https://image.shutterstock.com/image-vector/family-illustration-_-mom-lovey-260nw-385689133.jpg","https://image.shutterstock.com/image-vector/illustration-cute-baby-boy-clapping-260nw-102969851.jpg","https://media.istockphoto.com/vectors/vector-smart-smiling-schoolboy-index-finger-pointing-up-with-idea-vector-id638491494","https://i.pinimg.com/originals/6d/77/0d/6d770ded345654dbd6a1bb7936a0fa06.jpg"];
var person=["My Mom","My little brother","Myself","My Grandfather"];
var i=0;
function next()
{
  document.getElementById("i1").src=album[i];
 document.getElementById("f1").innerHTML=person[i];
  i++;
  
}