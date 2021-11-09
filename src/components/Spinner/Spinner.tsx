import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='2000' height='2000' viewBox='0 0 2000 2000'%3e%3cdefs%3e%3clinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3e%3cstop offset='0' stop-color='%230456a0'/%3e%3cstop offset='1' stop-color='%23002d56'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg id='Group_1096' data-name='Group 1096' transform='translate(-8550.499 -5139)'%3e%3ccircle id='Ellipse_37' data-name='Ellipse 37' cx='1000' cy='1000' r='1000' transform='translate(8550.499 5139)' fill='url(%23linear-gradient)'/%3e%3cg id='Group_1094' data-name='Group 1094' transform='translate(9015.538 5384.817)'%3e%3cpath id='Path_14773' data-name='Path 14773' d='M3027.053,1892.256H2923.666l5.546,102.509-178.047-105.277-3.63-16.36c-57.931-260.2-276.294-335.468-278.5-336.2l-24.064-7.992-2.284-25.241c-.7-7.6-5.122-86.071,50.892-493.143,60.067-436.839,470.3-521.266,474.443-522.072l7.333-1.423,7.371,1.423c4.127.806,414.339,85.233,474.442,522.072,56,407.072,51.574,485.541,50.875,493.143l-2.286,25.241-24.063,7.992c-8.881,3-220.943,77.653-278.5,336.2l-3.647,16.36-178.03,105.287Z' transform='translate(-2442.316 -487.061)' fill='%23002d56'/%3e%3cpath id='Path_14774' data-name='Path 14774' d='M2880.36,1855.12h203.752l109.135-572.73s139.1-164.542,135.392-312.74l-266.011,81.861-58,221.206-16.841,82.243-21.872-261.207-77.958-42.241-254.791-97.532s-12.6,298.658,197.32,338.08Z' transform='translate(-2442.946 -488.619)' fill='%23002d56'/%3e%3cpath id='Path_14775' data-name='Path 14775' d='M3418.936,1015.964C3361.945,601.505,2975.484,526.6,2975.484,526.6s-386.441,74.9-443.451,489.359c-57.027,414.459-50.689,484.366-50.689,484.366s240.732,79.9,304.1,364.525l101.341,59.923-38.012-699.087s-202.72-29.958-171.047-214.719l221.735,84.889,25.335,259.662,50.689,14.982,50.689-14.982,25.335-259.662,221.735-84.889c31.675,184.761-171.046,214.719-171.046,214.719l-38.012,699.087,101.359-59.923c63.348-284.629,304.079-364.525,304.079-364.525S3475.982,1430.423,3418.936,1015.964Z' transform='translate(-2442.44 -487.192)' fill='%2378848a'/%3e%3cpath id='Path_14776' data-name='Path 14776' d='M2852.712,1227.316l37.588,691.406-.312,7.25-18.353-10.853L2807.329,1258.4l-74.163-45.143c-116.082-77.393-51.5-200.67-51.5-200.67C2649.992,1197.355,2852.712,1227.316,2852.712,1227.316Z' transform='translate(-2443.053 -488.813)' fill='%23b0bfc6' style='mix-blend-mode: screen;isolation: isolate'/%3e%3cpath id='Path_14777' data-name='Path 14777' d='M2530.23,1247.092l-9.672,229.732s149.929,60.463,207.971,227.336l-43.522-220.077s-72.56,21.77-113.667-26.606C2530.23,1409.118,2530.23,1247.092,2530.23,1247.092Z' transform='translate(-2442.57 -489.6)' fill='%23b0bfc6' style='mix-blend-mode: screen;isolation: isolate'/%3e%3cpath id='Path_14778' data-name='Path 14778' d='M2796.731,1898.042l-132.2-528.818s36.3,308.741,42.729,347.444C2707.256,1716.668,2761.263,1885.144,2796.731,1898.042Z' transform='translate(-2443.063 -490.002)' fill='%23002d56'/%3e%3cpath id='Path_14779' data-name='Path 14779' d='M3104.139,1227.316l-37.588,691.406.313,7.25,18.353-10.853L3149.54,1258.4l74.162-45.143c116.082-77.393,51.481-200.67,51.481-200.67C3306.858,1197.355,3104.139,1227.316,3104.139,1227.316Z' transform='translate(-2444.397 -488.813)' fill='%23acbac3'/%3e%3cpath id='Path_14780' data-name='Path 14780' d='M3427.387,1247.092l9.674,229.732s-149.931,60.463-207.971,227.336l43.521-220.077s72.543,21.77,113.669-26.606C3427.387,1409.118,3427.387,1247.092,3427.387,1247.092Z' transform='translate(-2444.943 -489.6)' fill='%23919ea5'/%3e%3cpath id='Path_14781' data-name='Path 14781' d='M2864.293,623.469s-198.315,67.714-244.251,297.464c21.762-16.928,77.388-113.668,195.885-118.5s166.863-70.133,145.1-128.174S2888.486,613.8,2864.293,623.469Z' transform='translate(-2442.913 -487.503)' fill='%23b0bfc6' style='mix-blend-mode: screen;isolation: isolate'/%3e%3cpath id='Path_14782' data-name='Path 14782' d='M2687.984,897.526s33.848-43.531,74.955-45.954C2804.066,849.158,2714.572,953.148,2687.984,897.526Z' transform='translate(-2443.142 -488.278)' fill='%23b0bfc6' style='mix-blend-mode: screen;isolation: isolate'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"/>
    </Svg>
  );
};

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
