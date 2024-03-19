import Enzyme, { ShallowWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Configuring enzyme to use the adapter
Enzyme.configure({ adapter: new Adapter() });
import App from "./App";

//DRY refactor=> Don't Repeat Yourself
// factory function to create a shallow wrapper for the app
// *@function setup
// *returns {ShallowWrapper}
const setup = () => shallow(<App />); // it returns app shallow wrapper that is shallow rendering of app comp
//shallow rendering of APP more details go to unittesing notebooks
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without crashing", () => {
  const wrapper = setup();
  console.log(wrapper.debug()); //debug method used to show the html in test case results
  //go to https://enzymejs.github.io/enzyme/ to check more on shallow wrapper methods like debug()

  //so rendering a app into test means we can use shallow from enzyme
  // for assertions we can use jest
  //expect(wrapper.exists()).toBe(true);
  //.exists() & toBe are jest asserstions
  const appComponent = findByTestAttr(wrapper, "container-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup();
  const countDisplay = findByTestAttr(wrapper, "count").text(); //text() will written inside the text and it should return always string
  expect(countDisplay).toBe("0");
});

test("clicking on button increments counter display", () => {
  //find the button
  const wrapper = setup();
  //click the button
  const button = findByTestAttr(wrapper, "increment-button");
  //find the display and test the number has been incremented
  button.simulate("click"); // for onclick

  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
