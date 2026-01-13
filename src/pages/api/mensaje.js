export async function POST({request}) {
    const body = await request.json();
    const{nombre, email, mensaje} = body;

    if(!nombre || !email || !mensaje){
        return new Response(
            JSON.stringify({error: 'Faltan datos'}),
            {
                status: 400,
                headers: {'Content-Type': 'application/json'}
            }
        )
    }
    return new Response(
    JSON.stringify({mensaje: 'Mensaje recibido'}),
    {
        status: 201,
        headers: {'Content-Type': 'application/json'}
    }
)
}

//Guardar el mensaje en un archivo

