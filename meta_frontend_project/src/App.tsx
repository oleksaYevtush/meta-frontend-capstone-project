import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import RootRoute from "src/routes";
import { Layout } from "src/components";
import { NotificationsProvider } from "@mantine/notifications";
import { StateContextProvider } from "src/contexts";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <StateContextProvider>
        <NotificationsProvider>
          <Router>
            <Layout>
              <RootRoute />
            </Layout>
          </Router>
        </NotificationsProvider>
      </StateContextProvider>
    </MantineProvider>
  );
};

export default App;
