var datas = []

function loadDummy(){
    var data = {
        ProjectName: "Dummy Project 1",
        StartDate: "06/03/2023",
        EndDate: "12/03/2023",
        Description: "This is first project, do not delete.",
        uploadImg: "./assets/images/astronaut.jpg",
        skills: ["nodejs"]
    }
    datas.push(data)

    reloadProjectData()
}

function getData(){
 
    let inputProjectName = document.getElementById("inputProjectName").value
    let inputStartDate = document.getElementById("inputStartDate").value
    let inputEndDate = document.getElementById("inputEndDate").value
    let inputDescription = document.getElementById("inputDescription").value

    let image = document.getElementById("uploadImg").files
    image = URL.createObjectURL(image[0])

    let skills = []
    if (document.getElementById('nodejs').checked ){
        skills.push("nodejs")
    }
    if (document.getElementById('reactjs').checked ){
        skills.push("reactjs")
    }
    if (document.getElementById('vuejs').checked ){
        skills.push("vuejs")
    }
    if (document.getElementById('laravel').checked ){
        skills.push("laravel")
    }

    console.log("Project Name: "+inputProjectName)
    console.log("Start Date: "+inputStartDate)
    console.log("End Date: "+inputEndDate)
    console.log("Description: "+inputDescription)
    console.log("uploadImg: "+image)
    console.log("skills: "+skills)

    var data = {
        ProjectName: inputProjectName,
        StartDate: inputStartDate,
        EndDate: inputEndDate,
        Description: inputDescription,
        uploadImg: image,
        skills: skills
    }
    datas.push(data)

    reloadProjectData()
}

const setDuration = (start, end) => {
    const dateStart = new Date(start).getTime();
    const dateEnd = new Date(end).getTime();

    const durasi = dateEnd - dateStart;
    const hari = durasi / (1000 * 60 * 60 * 24);
    return hari;
};

function openDetail(i){
    // alert(datas[i].ProjectName)
    var queryString ="./myproject-detail.html?"
    queryString += "ProjectName="+datas[i].ProjectName+"&"
    queryString += "StartDate="+datas[i].StartDate+"&"
    queryString += "EndDate="+datas[i].EndDate+"&"
    queryString += "Description="+datas[i].Description+"&"
    queryString += "skills="+datas[i].skills

    window.location.replace(queryString);
}
        
function openRemove(deletedIndex){
    if(deletedIndex == 0){
        alert("you can not delete this project")
    }else{
        var temp_datas = []
        for(let i=0; i< datas.length; i++){
            if(i != deletedIndex){
                temp_datas.push(datas[i])
            }
        }
        datas = temp_datas
        reloadProjectData()
    }

}
   
function reloadProjectData(){
    if (datas.length < 1){
        document.getElementById("container").innerHTML = ""
    }else{
        var content = "<h1 style='text-align: center;'>My Project</h1><div class='project_container'>"
        for(let i = 0; i < datas.length; i++){
            // content += "<img src='"+datas[i].uploadImg+"' alt='' />"
            content += "<div class='card'>"
            content += "<div class= 'card-heading'>"
            content += "<img src="+datas[i].uploadImg+" alt=''/>"
            content += "<h4>"+datas[i].ProjectName+"</h4>"
            content += "<p class='deadline'> Durasi: "+setDuration(datas[i].StartDate,datas[i].EndDate)+" Hari</p>"
            content += "</div>"
    
            content += "<div class='card-body'>"
            content += "<p class='description'>"+datas[i].Description+"</p>"
    
            content += "<div class='icon-skills'>"
            if (datas[i].skills.includes("nodejs")){
                content += "<i class='fa-brands fa-node'></i>"
            } 
            if (datas[i].skills.includes("reactjs")){
                content += "<i class='fa-brands fa-react'></i>"
            }
            if (datas[i].skills.includes("vuejs")){
                content += "<i class='fa-brands fa-vuejs'></i>"
            }
            if (datas[i].skills.includes("laravel")){
                content += "<i class='fa-brands fa-laravel'></i>"
            }
            content += "</div>"
    
            content += "<div class='btn-change'>"
            content += "<button class='btnStyle' onclick='openDetail("+i+")'>edit</button>"
            content += "<button class='btnStyle'onclick='openRemove("+i+")'>delete</button>"
            content += "</div>"
            content += "</div>"
            content += "</div>"
        }
        content += "</div>"
        document.getElementById("container").innerHTML = content
    }
}
