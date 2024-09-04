const Rajmouli_Films = [
    {name : "Jr.NTR", film : "Student No. 1"},
    {name : "Jr.NTR", film : "Simhadri"},
    {name : "Ravi Teja", film : "Vikramarkudu"},
    {name : "Prabhas", film : "Chatrapathi"},
    {name : "Jr.NTR", film : "YamaDonga"},
    {name : "Sunil", film : "Maryada Ramanna"},
    {name : "RamCharan", film : "Magadheera"},
    {name : "Prabhas", film : "Bahubali 1"},
    {name : "Prabhas", film : "Bahubali 2"},
    {name : "Eaga", film : "Sudeep"},    
    {name : "Jr.NTR", film : "RRR"},
    {name : "RamCharan", film : "RRR"}
]

const groupByActors = Rajmouli_Films.reduce((acc, currentFilm) =>{
    if(acc[currentFilm.name]){
        acc[currentFilm.name].push(currentFilm.film);
    }else{
        acc[currentFilm.name] = [currentFilm.film];
    }
    return acc;
}, {});

console.log(groupByActors)