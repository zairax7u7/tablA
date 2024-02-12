var activeData = document.getElementById('activeData');
var closeData = document.getElementById('closeData');
var clickEyes = document.getElementsByClassName('clickEyes');

for (var i = 0; i < clickEyes.length; i++) {
    clickEyes[i].addEventListener('click', function () {
        // Acceder al elemento activo correspondiente
        activeData.classList.toggle('active-eye-visibility');
    });
}

// Agrega aquí la lógica para closeData si es un botón diferente
closeData.addEventListener('click', function () {
    activeData.classList.toggle('active-eye-visibility');
});

var nombre = document.getElementById('name')
var inputName = document.getElementById('inputName')

nombre.addEventListener('click',function(){
    inputName.focus()
})

var calendar = document.getElementById('calendar')
var inputCalendar = document.getElementById('inputCalendar')

calendar.addEventListener('click',function(){
    inputCalendar.classList.toggle('date-calendar-active')
})