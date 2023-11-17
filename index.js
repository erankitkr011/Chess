const div=document.getElementById('#div')
function print(data){
    const label=document.createElement('label')
    label.textContent=data;
    document.body.append(label);
}
function newLine(){
    const br=document.createElement('br');
    document.body.appendChild(br);
}
const board_size=8;

for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        if((i+j)%2==0){
            print('* ');
        }
        else{
            print('# ');
        }
    }
    newLine();
}