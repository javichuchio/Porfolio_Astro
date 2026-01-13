export async function DELETE({params}){
    const id=Number(params.id)
    return new Response(
        JSON.stringify({menssage:`user ${id} delete`}),
        {
            status:200
        }
)
}
const users=[
    {id:2,name:"pigmeo"}
]
export async function GET({params}) {
    const id=Number(params.id)
    return new Response(
        JSON.stringify({menssage:`user ${id} delete`}),
        {
            status:200
        }
)
}