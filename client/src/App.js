//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
//layout
import HomeLayout from "./Layout/Home.layout";
//Components
import Temp from "./Components/temp";
import Master from "./Components/master";
export default function App()  {
  return (
    <>
    <HomeLayout />
    <HomeLayoutHOC path="/" exact Component={Temp}/>
    <HomeLayoutHOC path="/:type" exact Component={Master}/>
    </>
  );
};

