const Show=(props)=>{
return(
<div className=' col-6 col-md-3'>

   <div className='text-white  bg-danger  text-center m-1 p-2'>
   <img src={props.img} alt="" />
    <b>{props.temp} <sup>o</sup>C</b>
    <p><b>{props.desc}</b></p>
    <h4 >{props.city}</h4>
    <button className='btn mt-2' type='button' onClick={()=>props.rem(props.id)}><i className="fas fa-trash"></i></button>
   </div>
</div>
)
}
export default Show;