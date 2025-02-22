import "./global.css";
import { attended, absent } from "./api/payload";
import AttendanceList from "./components/AttendanceList";

function App() {
  return <AttendanceList attended={attended} absent={absent} />;
}

export default App;
