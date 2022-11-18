import React from 'react';

import {
  Box,
  Button,
  Heading,
  Text,
  Anchor,
  Meter,
  Image,
  ResponsiveContext
} from 'grommet';
import styled from "styled-components";
import { Code } from "grommet-icons";
import { useParams } from "react-router-dom";

import { useAppContext } from '../hooks/useAppState';
import BuySection from './BuySection';
import BuySectionNoKYC from './BuySectionNoKYC';

const StyledGetStartedText = styled(Text)`
  color: var(--unnamed-color-ffcc00);
  text-align: left;
  font: normal normal 600 16px/24px Poppins;
  letter-spacing: 0px;
  color: #FFCC00;
  text-transform: Uppercase;
  opacity: 1;
`;

const StyledGoldListText = styled(Text)`
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal 600 16px/24px Poppins;;
  letter-spacing: 0px;
  color: #707070;
  text-transform: capitalize;
  opacity: 1;
`;
const StyledBalanceText = styled(Text)`
  color: var(--unnamed-color-ffcc00);
  text-align: left;
  font: normal normal normal ${window.innerWidth <= 500 ? "20px" :"28px"}/47px Poppins;;
  letter-spacing: 0px;
  color: #FFCC00;
  text-transform: capitalize;
  opacity: 1;
`;

const StyledText = styled(Text)`
  text-align: left;
  font: normal normal 600 30px/61px Poppins;
  letter-spacing: 0px;
  text-transform: capitalize;
  opacity: 1;
`;
const StyledBox = styled(Box)`
  background: #16151A 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;

`;

const StyledAnchor = styled(Anchor)`
/* UI Properties */
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-transform: capitalize;
  opacity: 1;
  background: var(--black) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-707070);
  background: #060707 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 8px;
  opacity: 1;
`;

export default function Banner() {

  const { state } = useAppContext();
  const size = React.useContext(ResponsiveContext);
  const { uri } = useParams();
  return (
    <Box align="center" pad={{horizontal:"large",top:"xsmall"}} >

      <Box alignContent="left" pad={{top:"xsmall"}} width="large" height="xsmall">
        <StyledGetStartedText direction="horizontal" color="#FFCC00">
          Get Started
        </StyledGetStartedText>
        <StyledText color="#F1F1F1">
          Buy SRG
        </StyledText>
      </Box>
      <StyledBox gap="large" background="#16151A" pad="medium"  width="large" height="298px">
          <Box align="center" pad={{top:"medium"}}>
            <StyledGoldListText alignContent="center" size={size}>Gold List Balance</StyledGoldListText>
          </Box>
          <Box align="center"  width="large">
            <StyledBalanceText size={size}><span style={{color:"white"}}>{(Number(state.goldListBalance)/10**18).toFixed(2)} SRG</span>  |  {(state.goldListBalance/(83000000*10**18)*100).toFixed(4)} %</StyledBalanceText>
            <Box align="left" height="small" width="large">
              <Meter
                type="bar"
                align="center"
                background={{
                  color: "light-1",
                  opacity: "strong"
                }}
                values={[{
                  value: state.goldListBalance/(83000000*10**18)*100,
                  color: "#FFCC00",
                  label: 'Balance',
                  onClick: () => {}
                }]}
                aria-label="meter"
                height="40px"
                width="large"
              />
            </Box>
          </Box>
          <Box>
          {
            uri === "eventWhiteList" ?
            <BuySectionNoKYC />:
            <BuySection />
          }
          </Box>

      </StyledBox>
    </Box>
  )
}
