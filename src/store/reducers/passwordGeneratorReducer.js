const initialState = {
  availableRules: [
    {
      id: 1,
      title: "Alphabets - Uppercase",
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      id: 2,
      title: "Alphabets - Lowercase",
      value: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      id: 3,
      title: "Numeric",
      value: "0123456789",
    },
    {
      id: 4,
      title: "Special Charecters",
      value: "!@#$%^&*()",
    },
    {
      id: 5,
      title: "Hyphen",
      value: "-",
    },
    {
      id: 6,
      title: "Underscore",
      value: "_",
    },
    {
      id: 7,
      title: "Arithematic Symbols",
      value: "+-*/%|/?",
    },
  ],
};

const passwordGenerator = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default passwordGenerator;
