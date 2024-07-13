/*
 * File: /src/components/client/icon/github.tsx
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
    width={31}
    height={26}
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.937 10.86c8.09-3.524 13.483-5.848 16.182-6.97C26.825.685 28.426.128 29.47.11c.23-.005.743.052 1.075.322.281.228.358.536.395.752.037.215.083.707.047 1.092-.418 4.388-2.225 15.035-3.144 19.95-.39 2.079-1.155 2.776-1.896 2.844-1.612.149-2.835-1.064-4.396-2.088-2.442-1.6-3.822-2.597-6.192-4.16-2.74-1.805-.964-2.797.597-4.419.409-.424 7.509-6.882 7.646-7.468.017-.073.033-.346-.13-.49-.161-.144-.4-.095-.574-.056-.245.056-4.146 2.634-11.704 7.736-1.107.76-2.11 1.131-3.01 1.112-.99-.022-2.896-.56-4.313-1.021-1.737-.565-3.118-.864-2.998-1.823.063-.5.75-1.01 2.064-1.533Z"
      clipRule="evenodd"
    />
  </svg>
);

SvgComponent.displayName = "Telegram";

export default SvgComponent;
