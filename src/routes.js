import { StackNavigator } from 'react-navigation';

import HomePage from './pages/home';
import DetailsPage from './pages/details';

const Routes = StackNavigator(
  {
    Home: { screen: HomePage },
    Details: { screen: DetailsPage },
  },
);

export default Routes;
