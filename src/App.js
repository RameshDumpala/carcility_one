// import "./App.css";
import { Schedule } from "./Schedule/Schedule";
// import Main from "./Jobhistory/Main";
import Overview from "./Overview/Overview"; 
import Header from "./header/Header";
// import Inboxbody from "./Inbox/Inboxbody";
// import OverMain from "./Overviewbody/OverMain"; 

function App() {
  return (
    <div>
      <Header/>
      <Schedule />
      <Overview/>
     
      {/* <Inboxbody/> */}
     
  
    </div>
  );
}

export default App;
