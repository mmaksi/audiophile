import { ReactNode } from 'react';
import color, { ColorScheme } from './color';
import padding, { PaddingScheme } from './padding';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: ReactNode;
}

const theme = {
  color,
  padding,
};

export interface Theme {
  color: ColorScheme;
  padding: PaddingScheme;
}

const ThemeWrapper = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
