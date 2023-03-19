import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron

reactotron.configure({ name: 'TODO App' }).use(reactotronRedux()).connect()

export default reactotron
