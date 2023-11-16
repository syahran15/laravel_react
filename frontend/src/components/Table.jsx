import Table from "react-bootstrap/Table";
import useUser from "../hooks/useUser";
import EditUser from "../components/ButtonEdit";
import DeleteUser from "../components/ButtonDelete";

function ComTable() {
  const { users } = useUser();

  console.log("ini data user", users);

  return (
    <Table
      striped
      bordered
      hover
      size="lg"
      style={{
        marginTop: "20px",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <thead>
        <tr>
          <th>No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>User</td>
              <td style={{ display: "flex", justifyContent: "center" }}>
              <EditUser />
              <DeleteUser />
            </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ComTable;
