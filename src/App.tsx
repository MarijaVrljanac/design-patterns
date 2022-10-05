import React, { useState, ReactElement, ReactNode } from 'react';
import './App.css';
import {} from "./examples/Adapter";
import {} from "./examples/Builder";
import {} from "./examples/Composite";
import {} from "./examples/Observer";
import {} from "./examples/AbstractFactory";
import {} from "./examples/Mediator";
import {} from "./examples/Observer2";
import {} from "./examples/Observer3";
import {} from "./examples/AbstractFactory2";
import {} from "./examples/Composite3";





//Conventional props
function Heading({title}: {title: string;}){
  return(
    <h1>{title}</h1>
  )
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement{
  return(
    <h2>{children}</h2>
  )
}

//Default props
const defaultContainerProps = {
  heading: <strong>Types of Design Patterns:</strong>
}

type ContainerProps = {children: ReactNode} & typeof defaultContainerProps;

function Container({heading, children}: ContainerProps) : ReactElement{
  return(
    <div><h4>{heading}</h4>{children}</div>
  );
}

Container.defaultProps = defaultContainerProps;

//Functional props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(0);

  return(
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <br></br>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>

    </div>
  )
}

//List
function List<ListItem>({
  items,
  render,
}: {
  items:ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <div>
      {items.map((item, index) => (
        <h6 key={index}>
          {render(item)}
        </h6>        
      ))}
    </div>
  )
}

//Class component
class MyHeader extends React.Component<{
  title: ReactNode,
}> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}




function App() {
  const[number, setNumber] = useState(5);

  const changeNumber = () => {
    setNumber(10);
  }


  return (
    <div className="App">
       <Heading title="Design Patterns"></Heading>
       <HeadingWithContent><strong>TypeScript/React</strong></HeadingWithContent>
       <hr></hr>
        <Container><i><u>Creational patterns</u></i></Container>
       
        <List items={["Abstract Factory", "Builder"]} render={(item:string) => <div>{item.toUpperCase()}</div>}></List>
        <i><u>Structural patterns</u></i>
       
        <List items={["Adapter", "Composite"]} render={(item:string) => <div>{item.toUpperCase()}</div>}></List>
        <i><u>Behavioral patterns</u></i>
       
        <List items={["Mediator", "Observer"]} render={(item:string) => <div>{item.toUpperCase()}</div>}></List>
        {/* <MyHeader title="Header!"></MyHeader> */}
        <TextWithNumber>
        
          {(num:number) => <div><hr></hr><br></br>Number of examples made: {num}</div>}
        </TextWithNumber>
    
    </div>
  );
}

export default App;
