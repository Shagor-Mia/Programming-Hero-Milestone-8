import "./App.css";
import ControlledField from "./components/ControlledField/ControlledFeild";
import CustomHookForm from "./components/CustomHookForm/CustomHookForm";
import FamilyTree from "./components/FamilyTree/Familytree";
import SimpleForm from "./components/Form/SimpleForm";
import FormAction from "./components/FormAction/FormAction";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
  return (
    <>
      <h1>Explore Form</h1>
      {/* <SimpleForm /> */}
      {/* <FormAction /> */}
      {/* <ControlledField /> */}
      {/* <UncontrolledField /> */}
      {/* <CustomHookForm /> */}
      {/* <ProductManagement /> */}
      <FamilyTree />
    </>
  );
}

export default App;
