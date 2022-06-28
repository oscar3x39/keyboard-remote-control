import Title from '../components/title'
import Browser from '../components/browser'
import Search from '../components/search'
import Navigator from "../components/navigation"

export default function search() {
  return (
    <>
      <Title title={"BROWSER"}></Title>
      <Search></Search>
      <Browser></Browser>
      <Navigator></Navigator>
    </>
  )
}