function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone_number").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value
    let your_massage = document.getElementById("your_massage").value

    //conditional
    if(name == "") {
        return alert("nama harus di isi")
    } else  if(email == "") {
        return alert("email harus di isi")
    } else  if(phone == "") {
        return alert("telpon harus di isi")
    } else  if(subject == "") {
        return alert("subjek harus di isi")
    } else  if(address == "") {
        return alert("alamat harus di isi")
    } else  if(your_massage == "") { 
       return alert("pesan harus di isi")
    } 

    const emailReceiver = "opvinz@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama saya ${name}, alamat saya ${address}, ${your_massage} \nbisakah anda menghubungi saya di ${phone}`
    a.click()

    let data = {
        name,
        email,
        phone,
        subject,
        address,
        your_massage
    }

    console.log(data)
    
}


