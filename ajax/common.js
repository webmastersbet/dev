// OBJECTS
var user = {
	name: "Ivan";
	age: 32
};
alert(user.name);
alert(user.age);

// <script>
$(function(){
	$("h2").css("color", "red");
});
// </script>
// или использовать более длинный вариант
jQuery(document).ready(function(){
	jQuery("h2").css("color", "red");
});

// SELECTORS
$("#content"); //выбираем елемент с id=content
$("div#content"); //выбираем div с id=content (хотя и без div работает)
$(".wrapper"); //выбираем елементы с class=wrapper
$("div.wrapper"); //выбираем div`ы class=wrapper
$(".wrapper.box"); //выбираем елементы с class=wrapper и box
$("h2"); //выбираем все теги с h2
$("h1, h2"); //выбираем все теги с h1 и h2

$("article h2"); //выбираем все теги h2 внутри тега article
$("div article h2"); //выбираем все теги h2 внутри тега article внутри тега div

$("article").find("h2"); //аналогия примеров выше
$("div").find("article").find("h2"); //аналогия примеров выше

$("h1 + p"); // выбор всех p элементов, перед которыми есть h1 элементы
$("#stick ~ article"); // выбор всех article элементов после элемента с id=stick
$("#stick").prev(); // выбор предыдущего элемента от найденного 
$("#stick").next(); // выбор следующего элемента от найденного

$("*") // выбор всех элементов
$("article > h2"); // выбираем все теги h2 которые являются непосредственными потомками тега article
$("article > *"); // выбор всех потомков элемента article
$("article").children(); // выбор всех потомков элемента article
$("p").parent(); // выбор всех прямых предков элемента p
$("p").parents("div"); // выбор всех предков элемента p которые есть div parents принимает в качестве параметра селектор



















