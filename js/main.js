
document.getElementById('MyForm').addEventListener("submit", Check);


function Check(event)
{
    event.preventDefault();
    var val = document.getElementById('MyForm');
    var clr = val.clr.value;
    var pet = val.pet.value;
    var bday = val.bday.value;
   var  count = 0;
    if (clr == "Pink")
    ++count;
    if (pet =="Cat")
    ++count;
    if (bday == "23.02.2003")
    ++count;

    if (count==3)
    {
        document.getElementById('result').innerHTML = "ТЫ СУПЕР!!!!";
        document.getElementById('knopka').disabled="disabled";
    }
    else
    {
        document.getElementById('result').innerHTML = "Это плохой результат! Пройди ещё раз!!!";
    }
    
    }

var cnt = 0;
function Click(val)
{
    cnt++;
    val.innerHTML = cnt;
    var alpha = "123456789abcdef";
    var color = "#";
    for (var i = 0;i<6;++i)
    {
        color+=alpha[Math.floor(Math.random() * 15)];
    } 

    val.style.background = color;
    if (cnt == 100)
    {
        val.innerHTML = "Вы очень сильно любите Дану!";
        cnt = 0;
        val.disabled="disabled";
    }
}

