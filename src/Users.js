import { Card } from "react-bootstrap";
import {useState} from "react"

const Users = (props) => {
  const [listusers, setlistusers] = useState('')
  
  const modiflist = (event) => {
    setlistusers(event.target.value)
  }
      return(
        <div className="App">

<div className="row">
  <div className="col-4">
  <span>Filter</span>
  </div>
  <div className="col-6">
   <input type='text' value={listusers} onChange={event => modiflist(event)} />
   : {listusers}
   </div>
   </div>
 
   <div className="row">
 <div className="df">
          {props.users.map((user, index) => {
        return user.name === listusers || user.location === listusers || user.car === listusers || listusers === '' ? (
          <Card className="d" style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src={user.url}
              // style={{ width: "15rem", height: "15rem" }}
            />
            <Card.Title>{user.name}, {user.car}</Card.Title>
            <Card.Text>{user.location}</Card.Text>
            
          </Card.Body>
        </Card>


        )
        : null;
    })
  }
  </div>
  </div>

      
            </div>
           
      
      )  
   
}

export default Users