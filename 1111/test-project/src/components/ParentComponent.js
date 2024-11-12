import ChildComponent from "./ChildComponents";

const ParentComponent = () => {
  return (
    <div>
      <div>부모 컴포넌트</div>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;