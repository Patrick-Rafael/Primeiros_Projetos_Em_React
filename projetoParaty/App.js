
import { NavigationContainer, navigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from './componentes/Tela inicial'
import Hospedagem from './componentes/Hospedagem'
import Restaurantes from './componentes/Restaurantes'
import Passeios from './componentes/Passeios'

const stack = createStackNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Tela Inicial" component={TelaInicial} />
        <stack.Screen name="Restaurantes" component={Restaurantes} />
        <stack.Screen name="Passeios" component={Passeios} />
        <stack.Screen name="Hospedagem" component={Hospedagem} />
      </stack.Navigator>
    </NavigationContainer>

  );
}


