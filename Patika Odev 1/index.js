function AddArray() 
{ 
    var rate_value;

    if (document.getElementById('gender1').checked) 
    {
        rate_value = document.getElementById('gender1').value;
    }
    else if(document.getElementById('gender2').checked)
    {
        rate_value = document.getElementById('gender2').value;
    }
    else if(document.getElementById('gender3').checked)
    {
        rate_value = document.getElementById('gender3').value;
    }

    let data =  {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        gender: rate_value,
        date: document.getElementById("date").value,
        email: document.getElementById("email").value,
        bootcamp: document.getElementById("b").value,
        datas: function ()
        {
            return this.firstname + ' ' + this.lastname + ' ' + this.gender + ' ' + this.date + ' ' + this.email + ' ' + this.bootcamp;
        }
    }

  const form = [data.datas()];
  console.log(form);
}