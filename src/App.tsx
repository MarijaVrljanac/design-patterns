import React, { ReactElement, ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import AbstractFactory from "./examples/AbstractFactory";


//Conventional props
function Heading({title}: {title: string;}){
  return(
    <h1>{title}</h1>
  )
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement{
  return(
    <h3>{children}</h3>
  )
}

//Default props
const defaultContainerProps = {
  heading: <strong>Some heading</strong>
}

type ContainerProps = {children: ReactNode} & typeof defaultContainerProps;

function Container({heading, children}: ContainerProps) : ReactElement{
  return(
    <div><h1>{heading}</h1>{children}</div>
  );
}

Container.defaultProps = defaultContainerProps;

//Functional props
function TextWithNumber({
  header,
  children,
}: {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);

  return(
    <div>
      <h2>{header(state)}</h2>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>

    </div>
  )
}


function App() {
  return (
    <div className="App">
       <Heading title="Design Patterns"></Heading>
       <HeadingWithContent><strong>TypeScript/React</strong></HeadingWithContent>
        <Container>Foo</Container>
        <TextWithNumber header={(num:number)  => <span>Header</span>}>
          {(num:number) => <div>Today's number is: {num}</div>}
        </TextWithNumber>
    
    </div>
  );
}

export default App;
