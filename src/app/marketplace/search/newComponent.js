import React from "react";

export function newComponent() {
  return <div>newComponent</div>;
}

const ComponentProps = (props) => {
  return (
    <div>
      <div>{props.name}</div>

      <div>{props.type}</div>
    </div>
  );
};

const ComponentParams = ({ name, type }) => {
  return (
    <div>
      <div>{name}</div>

      <div>{type}</div>
    </div>
  );
};

export const MainComponent = () => {
  return (
    <div>
      <ComponentProps name="toby" type="dog" />
      <ComponentParams name={"meowy"} type={"cat"} />
    </div>
  );
};

export default MainComponent;
