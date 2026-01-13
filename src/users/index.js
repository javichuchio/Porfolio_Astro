export async function GET(params) {
    const users=[
        {name:"Furrillo", edad:undefined},
        {name:"delegao", edad:2},

    ]
    return new Response(
        JSON.stringify(users),
        {status:200}
    )
}