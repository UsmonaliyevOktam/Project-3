let user = [
    {
        id:"0001",
        login:"MDK91",
        password:"12345",
        userName: "John Doe"
    }
]

$(document).ready(function (){
    let kirishSoni = 0;
    

    $("#startModal").modal("show")
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password !=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    topildi = true;
                    if (password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide")
                    }
                }
            });
            if (!topildi){
                if (kirishSoni>= 2){
                    $("#startModal").modal("hide");
                    alert("Tizim bloklandi!")
                }
                alert("Login yoki parol xato!")
                kirishSoni++;
            }
        }else {
            alert("login va parol qatorlarini toldiring")
        }
    })
});