export interface ColorScheme {
  brand: {
    primary: '#FFFFFF';
    secondary: '#000000';
    tertiary: '#D87D4A';
  };
  ui: {
    primary: '#FAFAFA';
    secondary: '#101010';
    tertiary: '#FBAF85';
    quaternary: '#F1F1F1';
  };
  bg: {
    primary: '#FFFFFF';
    secondary: '#000000';
  };
  text: {
    primary: '#000000';
    secondary: '#D87D4A';
    tertiary: '#FFFFFF';
  };
  button: {
    primary: '#D87D4A';
    primary_hover: '#FBAF85';
    secondary: '#FFFFFF';
    secondary_hover: '#000000';
  };
}

const color: ColorScheme = {
  brand: {
    primary: '#FFFFFF',
    secondary: '#000000',
    tertiary: '#D87D4A',
  },
  ui: {
    primary: '#FAFAFA',
    secondary: '#101010',
    tertiary: '#FBAF85',
    quaternary: '#F1F1F1',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#000000',
  },
  text: {
    primary: '#000000',
    secondary: '#D87D4A',
    tertiary: '#FFFFFF',
  },
  button: {
    primary: '#D87D4A',
    primary_hover: '#FBAF85',
    secondary: '#FFFFFF',
    secondary_hover: '#000000',
  },
};

export default color;
