import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import "jest-chain";
import "jest-extended";
import each from "jest-each";

global.each = each;

Enzyme.configure({ adapter: new Adapter() });
