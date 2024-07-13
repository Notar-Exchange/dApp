/*
 * File: /src/components/client/icon/x.tsx
 * Project: netz-treasury
 * Created: Friday, 21st June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */

type Props = React.HTMLAttributes<HTMLOrSVGElement>;

const SvgComponent = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M25.102 2.608h4.621L19.628 14.146l11.876 15.701h-9.299l-7.283-9.522-8.334 9.522H1.965l10.797-12.341L1.37 2.608h9.535l6.583 8.704 7.614-8.704ZM23.48 27.081h2.561L9.513 5.23H6.766L23.48 27.08Z"
    />
  </svg>
);

SvgComponent.displayName = "X";

export default SvgComponent;
