import renderer from "react-test-renderer";
import Button from "../Button";

it("renders Button Component correctly", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});