import Heading from "./components/text/text";
import List from "./components/OrderedList/list";
import Unlist from "./components/Unorderedlist.js/unlist";
import Table from "./components/table/table";
import Images from "./components/images/images";
import Images2 from "./components/images/images2";
import Images3 from "./components/images/images3";
import Table12 from "./components/table1/table12";
import List1 from "./components/ollist1/olList12";
import Form from "./components/form/form";
import Profile from "./components/Profile/Profile";
import Form1 from "./components/FormBoot/formBoot";
import Heading1 from "./components/text/heading";
import Card from "./components/card/card";
import TableBoot from "./components/tableBoot/tableboot";
import Card12 from "./components/Cards/Cards12";
import Heading12 from "./components/text/heading11";
import d,{ Greeting, Hour,Day,Months } from "./components/Greeting/Greeting";
import { Tbody, Thead } from "./components/table1/table13";
import { Button, ColorPick } from "./components/Bottons/Buttons";
import Flex from "./components/01-12-23/Youtube";
import ProductList from "./components/01-12-23/ProductList";
import ChildProp from "./components/ChildrenProp/childrenProp";
import Carousel from "./components/01-12-23/Courosel";
import ProductFetch from "./components/Products/FetchProduct";
import LifeCycle from "./components/LifeCycle/LifeCycle";
function App() {
   return(
    <div>
      <h1 style={{textAlign: 'center',color:'green'}}>22-11-23-Task</h1>
      <h2>Table Of Information</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Rahul</td>
          <td>18</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Raj</td>
          <td>19</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ravi</td>
          <td>17</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ramu</td>
          <td>21</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Ramesh</td>
          <td>20</td>
        </tr>
      </table>
      <h2>Fruits Name</h2>
      <ol>
        <li>Mango</li>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
        <li>Grapes</li>
      </ol>
      <h2>Animal Names</h2>
      <ul>
        <li>Lion</li>
        <li>Tiger</li>
        <li>Deer</li>
        <li>Dog</li>
        <li>Monkey</li>
      </ul>
      <Heading/>
      <h2>Flower Names</h2>
      <List/>
      <h2>Tree Names</h2>
      <Unlist/>
      <h2>Table of Information</h2>
      <Table />
      <h2>Images </h2>
      <Images/>
      <Images2/>
      <Images3/>
      <h1 style={{color:'green',textAlign:'center'}}>27-11-23-Task</h1>
      <h2>Table of Information</h2>
      <Table12 />
      <h2>Names of Trees</h2>
      <List1 />
      <h2>SignUp Form</h2>
      <Form />
      <h2>Profiles</h2>
      <Profile />
      <Heading1 />
      <Form1 />
      <h2>Card Using Bootstrap</h2>
      <Card />
      <h2>Table Using BootStrap</h2>
      <TableBoot />
      <h2>Displaying Cards using Boorstrap</h2>
      <Card12/>
      <Heading12 Textalign="center" Color="green" Text="29-11-23-Task"/>
      <Greeting day={Day(d.getDay())} Greeting={Hour(d.getHours())} month={Months(d.getMonth())} year={d.getFullYear()}/>
      <table>
        <Thead one="Id" two="Name" three="Age"/>
        <Tbody one="1" two="ramu" three="13"/>
        <Tbody one="2" two="raju" three="15"/>
        <Tbody one="3" two="rahul" three="18"/>
        <Tbody one="4" two="ramesh" three="19"/>
        <Tbody one="5" two="rajesh" three="20"/>
      </table>
      <Button width={60} height="40" Text="Size 1" BgColor={ColorPick()}/>
      <Button width={80} height="40" Text="Size 2" BgColor={ColorPick()}/>
      <Button width={100} height="40" Text="Size 3" BgColor={ColorPick()}/>
      <Button width={120} height="40" Text="Size 4" BgColor={ColorPick()}/>
      <Button width={140} height="40" Text="Size 5" BgColor={ColorPick()}/>
      <Button width={160} height="40" Text="Size 6" BgColor={ColorPick()}/>
      <Button width={180} height="40" Text="Size 7" BgColor={ColorPick()}/>
      <Button width={200} height="40" Text="Size 8" BgColor={ColorPick()}/>
      <Button width={220} height="40" Text="Size 9" BgColor={ColorPick()}/>
      <Button width={240} height="40" Text="Size 10" BgColor={ColorPick()}/>
      <Heading12 Textalign="center" Color="green" Text="01-12-23-Task"/>
      <Flex/>
      <ProductList />
      <Carousel/>
      <ChildProp>{"This is Monday"}{'This is Sunday'}</ChildProp>
      <Heading12 Textalign="center" Color="green" Text="04-12-23-Task"/>
      <ProductFetch />
      <LifeCycle Color={'Green'}/>
    </div>

   )
}

export default App;
