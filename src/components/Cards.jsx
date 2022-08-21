const Cards = (props) =>{
  return(
      <>
      <img src={props.img} alt={props.alt} />
      <h4>{props.title}</h4>
      <h6>{props.info}</h6>
      </>
  )
}

export default Cards