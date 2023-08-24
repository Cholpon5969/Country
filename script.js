const row = document.querySelector('.row');
const table = document.querySelector('.table')
axios(`https://restcountries.com/v3.1/all`).then((res)=>{
    console.log(res.data);
    let i = 1
    res.data.map((el)=>(table.innerHTML +=`
    <tr>
        <td>${i++}</td>
        <td>${el.flag}</td>
        <td>${el.name.common}</td>
        <td>${el.capital}</td>
        <td>${el.region}</td>
        <td>${el.population}</td>
    </tr>  `
    )
    )
})

