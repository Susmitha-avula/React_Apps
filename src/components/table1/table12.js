import Arr from "./table11";
function Table12() {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{Arr[0].id}</td>
          <td>{Arr[0].name}</td>
          <td>{Arr[0].age}</td>
        </tr>
        <tr>
          <td>{Arr[1].id}</td>
          <td>{Arr[1].name}</td>
          <td>{Arr[1].age}</td>
        </tr>
        <tr>
          <td>{Arr[2].id}</td>
          <td>{Arr[2].name}</td>
          <td>{Arr[2].age}</td>
        </tr>
        <tr>
          <td>{Arr[3].id}</td>
          <td>{Arr[3].name}</td>
          <td>{Arr[3].age}</td>
        </tr>
        <tr>
          <td>{Arr[4].id}</td>
          <td>{Arr[4].name}</td>
          <td>{Arr[4].age}</td>
        </tr>
      </table>
    </div>
  );
}
export default Table12;
