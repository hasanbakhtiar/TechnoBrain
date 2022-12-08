type propsType={
    title:string,
    price:number
}

const List = (props:propsType) => {
  return (
    <ul>
        <li>{props.title}</li>
        <li>{props.price}$</li>
    </ul>
  )
}

export default List