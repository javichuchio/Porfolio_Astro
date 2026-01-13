export async function GET(){
    const msg = {hora: new Date().toLocaleTimeString()};
    const text = 'La hora es: ' + msg.hora;
    console.log(text);
    return{
        body: JSON.stringify(msg),
        
        Headers: {'Content-Type': 'application/json'},
        status: 200
    }
}
  

