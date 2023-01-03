import { useParams } from "react-router-dom"

function UserPage() {
  const { id } = useParams()
  return (
    <div>
      User <h1>{id}</h1>
    </div>
  )
}

export default UserPage
