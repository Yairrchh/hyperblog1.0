import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "../Menu";
import { HomePage } from "../Pages/HomePage";
import { BlogPage } from "../Pages/BlogPage";
import { ProfilePage } from "../Pages/ProfilePage";
import { BlogPost } from "../Pages/BlogPost";
import { LoginPage } from "../Pages/LoginPage";
import { LogoutPage } from "../Pages/LogoutPage";
import { AuthProvider} from "../auth"
import {AuthRoute } from "../auth";
import { PostProvider } from "../Context";
import { SearchUserPage } from "../Pages/SearchUserPage";


function App() {
  return (
    <>
    <HashRouter>
    <AuthProvider>
    <PostProvider>
    <Menu/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/blog" element={<AuthRoute> <BlogPage/> </AuthRoute>}>
            <Route path=":slug" element={<BlogPost/>}/>
          </Route>

          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/logout" element={<AuthRoute> <LogoutPage/> </AuthRoute>}/>
          <Route path="/profile/" element={<AuthRoute> <SearchUserPage/> </AuthRoute>}/>
          <Route path="/profile/:username" element={<AuthRoute> <ProfilePage/> </AuthRoute>}/>


          <Route path="*" element={<p>Not Fount</p>}/>

        </Routes>
    </PostProvider>
    </AuthProvider>
    </HashRouter>
    </>
  );
}

export default App;
