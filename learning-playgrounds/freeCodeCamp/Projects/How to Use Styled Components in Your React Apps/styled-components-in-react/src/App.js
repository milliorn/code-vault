import { H1 } from "./components/Title";
import { DefaultButton, ExtendedButton } from "./components/Buttons";
import { Wrapper } from "./components/Wrapper";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";

const darkTheme = {
  background: "#222",
  color: "#fff",
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <H1>Styled Components</H1>

        <p>
          Cillum culpa deserunt enim et eiusmod quis proident consequat tempor
          ipsum sunt esse.
        </p>
        <DefaultButton as="a" href="https://www.google.com">
          Click
        </DefaultButton>
        <DefaultButton red>Click ME!</DefaultButton>
        <ExtendedButton red>Click ME!</ExtendedButton>

        <Wrapper>
          <h1>Another heading</h1>
          <p>
            Another Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere quam, beatae eius aperiam, nam rerum iure numquam ipsum eum
            quae provident ad. Recusandae animi pariatur praesentium sed dolore
            repellendus doloribus?
          </p>
          <button>Another button</button>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
