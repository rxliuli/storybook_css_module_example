import {story} from '../story'
import Hello from './Hello'

const {meta, of} = story(Hello)

export default meta({
  title: '/component/hello',
})

export const BasicExample = of({
  storyName: 'basic example',
})
