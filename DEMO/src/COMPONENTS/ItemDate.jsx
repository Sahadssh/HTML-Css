import './ItemDate.css'
// import './ItemDate.js'


function ItemDate(){
    const day = 31;
    const month = "may";
    const year = 2001;
return(
    
<div className='itemdate'>
    <span>{day}</span>
    <span>{month}</span>
    <span>{year}</span>

    
</div>
)
}

export default ItemDate;