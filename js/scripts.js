function choose () {
	var weight=parseInt(prompt("enter your weight in kgs"))
	var height=parseFloat(prompt("enter your height m"))
  var bmi = weight/ (height*height)
	if (bmi<18.5) {
alert ("EAT SOME FOOD " +bmi)
}
else if (bmi>=18.5 && bmi<=24.9) {
alert ("you are a normal human being "+bmi)
}
else if (bmi>=25) {
alert("YOU ARE FAT MY FREN " +bmi)
}
else if (weight===null || height===null) {
alert("enter somthing valid please")
}
}
choose()