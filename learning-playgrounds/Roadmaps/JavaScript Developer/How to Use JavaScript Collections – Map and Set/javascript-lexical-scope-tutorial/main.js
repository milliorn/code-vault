const fullName = 'John Doe';

const profile = () => {
  const sayName = () => {
    const writeName = () => {
      console.log(fullName);
    };
    writeName();
  }
  sayName();
}

profile();