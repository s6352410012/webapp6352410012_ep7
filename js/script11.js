//สร้างตัวแปรเพื่ออ้างอิงไปยังตำแหน่งคอนเมนต์ในเอกสาร HTML
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//ลองทดสอบตัวแปรที่สร้างไว้ข้างต้นว่าอ้างไปยังคอนเทนต์ในเอกสาร HTML เรียบร้อยไหม


//event click ของปุ่ม btncal
btnCal.addEventListener('click',()=>{
    //alert(money.value)
    //result.innerHTML = 'wow wow wow'
    if( money.value.trim().length ==0){
        alert('ป้อนเงินด้วย')
    }else if(person.value.trim().length == 0){
        alert('ป้อนคนด้วย')
    }else{
        //พร้อมคำนวณ
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }
})


//event click ของปุ่ม btncal
//btnCancel.addEventListener('click',()=>{
//    //alert(person.value)
//    money.value = ''
//    person.value = ''
//    result.innerHTML = '0.00'
//})


btnCancel.addEventListener('click', clearscreen)
    
function clearscreen(){
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
}