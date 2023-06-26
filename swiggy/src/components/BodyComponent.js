import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const BodyComponent=()=>(
    <>
    <div className="searchComponent"> Search</div>
    <div className="restroContainer">
        {resList.map((restraunt)=><RestroCard key={restraunt.data.id} resData={restraunt}/>)}
    </div>
    </>
)

export default BodyComponent;