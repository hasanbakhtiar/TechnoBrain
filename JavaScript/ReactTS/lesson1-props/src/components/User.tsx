type userTypes = {
    info:string,
    messageCount:number,
    isLoggedIn:boolean
}

const User = (props:userTypes) => {
  return (
    <div>
        {props.isLoggedIn ? `Welcome ${props.info}! You have ${props.messageCount} message`:"Welcome Guest"}
    </div>
  )
}

export default User