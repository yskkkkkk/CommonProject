import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./router/Characters";
import CharactersCreate from "./router/CharactersCreate";
import Home from "./router/Home";
import Signup from "./router/Signup";
import SignupEmail from "./router/SignupEmail";
import Login from "./router/Login";
import IdInquiry from "./router/IdInquiry";
import Profile from "./router/Profile";
import Follow from "./router/Follow";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Layout 필요 없는 주소 */}
          <Route exact path="/signup" component={Signup} />
          <Route path="/signup/email" component={SignupEmail} />
          <Route path="/login" component={Login} />
          <Route path="/idinquiry" component={IdInquiry} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/create" component={CharactersCreate} />
          {/* Layout 필요한 주소 */}
          <Layout>
            <Route exact path="/" component={Home} />
            {/* characters, login, signup같은 닉네임이 있다면 문제 발생 가능 주의 */}
            <Route exact path="/:nickname" component={Profile} />
            <Route exact path="/:nickname/follow" component={Follow} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
