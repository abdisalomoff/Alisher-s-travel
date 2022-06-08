var money = prompt("Summani kiriting:")
var elContent = document.querySelector(".money")


if (money >= 9666000) {
	console.log("Oq yo’l, Alisher!")
	elContent.textContent = "Oq yo’l, Alisher!"
} else {
	console.log ("Alisher, ozgina sabr qilish kerak bo’lar ekan.")
	elContent.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan."
}