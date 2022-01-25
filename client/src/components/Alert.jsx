import { useUsersContext } from "../context/user_context"
const Alert = () => {
  const { alertType, alertText } = useUsersContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert