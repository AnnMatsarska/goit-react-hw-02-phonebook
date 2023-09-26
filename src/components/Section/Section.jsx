import { SectionStyle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  );
};
