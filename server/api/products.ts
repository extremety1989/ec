import fake from "../../data/fake.json"
export default defineEventHandler(event => {
    const {q = 0} = getQuery(event)
    if(q !== "")
    {
        return fake
    }
    else
    {
        return fake.filter((data: any)=>{
            data.catId.includes(q)
        })
    }
})