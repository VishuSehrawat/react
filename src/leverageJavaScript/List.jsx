import { people } from "../data1";
import Person from "./Person";

const List = () => {
  return (
    <div className="personDiv">
      
        <Person people={[...people]} />
       
    </div>
  );
};

export default List;
