import styled from "styled-components";

const One = styled.div`
  color: red;
`;
const Two = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size + "px"};
`;

function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32} color={"blue"}>
        world
      </Two>
    </>
  );
}

export default App;
