

function tipcal() {
    var amount = document.getElementById("bill_amt").value

    var percent = document.getElementById("tip_per").value

    var peoples = document.getElementById("people").value

    var pay = (amount / 100) * percent / peoples


    document.getElementById("total_bill").value = pay;


}

