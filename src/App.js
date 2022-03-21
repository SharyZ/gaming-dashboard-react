import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Layout, FullscreenLayout } from "./components";

import { Main, Games, GameDetail, Login, Signup } from "./pages";

import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./utils/RequireAuth";
import PersistLogin from "./components/PersistLogin";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Layout />}>
                  <Route path="home" element={<Main />} />
                  <Route path="games" element={<Games />} />
                  <Route path="games/:gameId" element={<GameDetail />} />
                </Route>
              </Route>
            </Route>
            <Route element={<FullscreenLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
