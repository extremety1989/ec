import fake from "../../data/fake.json"
export default defineEventHandler((event) => {
    const {q = 0} = getQuery(event)
    if(q)
    {
        const filtered = fake.filter(a => a.catId == q);
        return filtered;
    }
    else
    {
        return fake;
    }

})