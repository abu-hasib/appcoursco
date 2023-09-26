import { unit, widths } from "@/app/styles";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import Header from "./pieces/header";

interface LayoutProps {
  fullWidth?: boolean;
  grid?: boolean;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  fullWidth,
  children,
  grid,
}) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Layout

const PageContainer = styled.div<LayoutProps>`
  display: flex;
  justify-content: ${({ grid }) => grid ? 'center' : 'top'};
  flex-direction: ${({ grid }) => grid ? 'row' : 'column'};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: ${({ fullWidth }) => fullWidth ? undefined : `${widths.regularPageWidth}px`};
  width: '100%';
  padding: ${({ fullWidth }) => fullWidth ? 0 : unit * 2};
  padding-bottom: unit * 5;
`;