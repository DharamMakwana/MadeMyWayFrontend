
import {SVGcontainer} from '../../layout-components/SVGContainer'


const SvgComponent = (props) => (
  <SVGcontainer 
  style={{top:'220%'}}
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    style={{
    width:'100%',
    maxWidth:'300px',
    top: '200%'
    }}
    {...props}
  >
    <path
      fill="#7A97F4"
      d="M298.8 370c-47.7 0-86.4 10.1-86.4 22.4 0 12.4 38.7 22.5 86.4 22.5 42.5 0 77.9-8 85.1-18.5.9-1.3 1.3-2.6 1.3-3.9 0-12.4-38.7-22.5-86.4-22.5zm0 25.6c-27.5 0-49.7-3.3-49.7-7.4v-.3c0-.1 0-.1.1-.2 0 0 0-.1.1-.1 1.9-3.8 23.4-6.8 49.5-6.8 25.2 0 46 2.8 49.2 6.4.3.3.4.6.4.9v.1c.1 4.1-22.2 7.4-49.6 7.4zM195.2 377.1H112c-2.1 0-4.2.7-5.9 2l-32 25.1c-1.5 1.2-.7 3.6 1.2 3.6h87.9c2.2 0 4.4-.9 6-2.4l26.9-26c.9-.8.3-2.3-.9-2.3zM525.3 377.1H442c-2.1 0-4.2.7-5.9 2l-32 25.1c-1.5 1.2-.7 3.6 1.2 3.6h87.9c2.2 0 4.4-.9 6-2.4l26.9-26c1-.8.4-2.3-.8-2.3z"
    />
    <path
      fill="#FF97C9"
      d="M298.8 365.9c-47.7 0-86.4 10.1-86.4 22.4 0 12.4 38.7 22.5 86.4 22.5 42.5 0 77.9-8 85.1-18.5.9-1.3 1.3-2.6 1.3-3.9 0-12.4-38.7-22.5-86.4-22.5zm0 25.6c-27.5 0-49.7-3.3-49.7-7.4v-.3c0-.1 0-.1.1-.2 0 0 0-.1.1-.1 1.9-3.8 23.4-6.8 49.5-6.8 25.2 0 46 2.8 49.2 6.4.3.3.4.6.4.9v.1c.1 4.1-22.2 7.4-49.6 7.4z"
    />
    <path
      fill="#F774B9"
      d="M383.9 392.3c-7.2 10.5-42.5 18.5-85.1 18.5-47.7 0-86.4-10.1-86.4-22.5 0 0 15 18.1 83.4 18.1 58.8.1 82.5-11 88.1-14.1zM348 383.1c-3.3-3.6-24.1-6.4-49.2-6.4-26.2 0-47.6 3-49.5 6.8.9-2.2 6.9-9.8 49.5-9.8 39.2 0 47.5 6.8 49.2 9.4z"
    />
    <path
      fill="#273D7A"
      d="m195.9 377.1-17.5-125.2c-.2-1.3-1.3-2.3-2.7-2.3h-23.6c-1.6 0-2.9 1.4-2.7 3.1l5.9 47.3c.2 1.9-1.2 3.5-3.1 3.5h-27c-1.7 0-3.1-1.3-3.2-3l-2.2-48.2c-.1-1.5-1.3-2.6-2.7-2.6H95c-1.6 0-2.8 1.3-2.7 2.8l3 82.4c.1 2.6 2.3 4.7 4.9 4.7h60.1l4.7 37.7h30.9zM526 377.1l-17.5-125.2c-.2-1.3-1.3-2.3-2.7-2.3h-23.6c-1.6 0-2.9 1.4-2.7 3.1l5.9 47.3c.2 1.9-1.2 3.5-3.1 3.5h-27c-1.7 0-3.1-1.3-3.2-3l-2.2-48.2c-.1-1.5-1.3-2.6-2.7-2.6h-22c-1.6 0-2.8 1.3-2.7 2.8l3 82.4c.1 2.6 2.3 4.7 4.9 4.7h60.1l4.7 37.7H526z"
    />
    <path
      fill="#FF97C9"
      d="m177.7 253.2-13.2 149.6c-.2 2.8-2.6 5-5.4 5h-19.8c-3.3 0-5.8-2.9-5.4-6.1l8.3-70.1-59.3 1c-3.3 0-5.8-2.9-5.2-6.1l.2-1.3 13.6-72.9c.4-2 2.1-3.5 4.2-3.5h18.9c2.6 0 4.6 2.4 4.2 5l-8.1 46c-.3 1.9 1.1 3.5 3 3.5H142l6.6-51.1c.3-2 2-3.5 4-3.5h21.1c2.3.1 4.2 2.2 4 4.5z"
    />
    <path
      fill="#F774B9"
      d="m142.6 325.2-.5 6.4-59.3 1c-3.3 0-5.8-2.9-5.2-6.1l.2-1.3h64.8zM177.7 253.2l-13.2 149.6c-.2 2.8-2.6 5-5.4 5h-3l15.7-159h1.9c2.3 0 4.2 2.1 4 4.4zM110.6 299.9c-.3 1.9 1.1 3.5 3 3.5h-5.8c-2.1 0-3.8-1.9-3.4-4l8.9-50.5h1.3c2.6 0 4.6 2.4 4.2 5l-8.2 46z"
    />
    <path
      fill="#FF97C9"
      d="m507.7 253.2-13.2 149.6c-.2 2.8-2.6 5-5.4 5h-19.8c-3.3 0-5.8-2.9-5.4-6.1l8.3-70.1-59.3 1c-3.3 0-5.8-2.9-5.2-6.1l.2-1.3 13.6-72.9c.4-2 2.1-3.5 4.2-3.5h18.9c2.6 0 4.6 2.4 4.2 5l-8.1 46c-.3 1.9 1.1 3.5 3 3.5H472l6.6-51.1c.3-2 2-3.5 4-3.5h21.1c2.4.1 4.3 2.2 4 4.5z"
    />
    <path
      fill="#F774B9"
      d="m472.7 325.2-.5 6.4-59.3 1c-3.3 0-5.8-2.9-5.2-6.1l.2-1.3h64.8zM507.7 253.2l-13.2 149.6c-.2 2.8-2.6 5-5.4 5h-3l15.7-159h1.9c2.4 0 4.3 2.1 4 4.4zM440.7 299.9c-.3 1.9 1.1 3.5 3 3.5h-5.8c-2.1 0-3.8-1.9-3.4-4l8.9-50.5h1.3c2.6 0 4.6 2.4 4.2 5l-8.2 46z"
    />
    <path
      opacity={0.28}
      fill="#FF97C9"
      d="m259.3 283.7-20.5 104c-1.1 5.6 2.5 10.9 7.4 10.9h108.6c4.8 0 8.4-5.1 7.5-10.5l-16.8-104c-.7-4.2-3.8-7.2-7.5-7.2h-71.2c-3.6-.1-6.7 2.8-7.5 6.8z"
    />
    <g fill="#FEC272">
      <path d="m351.9 290.2 9.9 32.9c.2.7.9 1.1 1.6.8.5-.2.9-.8.7-1.4l-6.5-33.7c-.4-1.8-2.4-2.8-4.1-2.1-1.3.6-2 2-1.6 3.5zM333.2 302.1l6.4 25.4c.1.5.6.7 1 .6.4-.1.6-.5.5-.9l-4.1-25.9c-.2-1.2-1.5-2-2.7-1.5-.8.4-1.3 1.3-1.1 2.3zM249.8 293.4l-8.3 25.3c-.1.5-.7.7-1.1.5-.4-.2-.6-.6-.5-1l6-25.9c.3-1.2 1.7-1.9 2.8-1.4 1 .5 1.4 1.5 1.1 2.5zM266.3 301.2l-10.8 47c-.1.5-.6.7-1 .6-.4-.1-.6-.5-.5-.9l8.5-47.5c.2-1.2 1.5-2 2.7-1.5.9.3 1.4 1.3 1.1 2.3zM289.2 306.7l-5.2 34.1c-.1.5-.6.8-1 .6-.4-.1-.6-.5-.6-.9l2.8-34.4c.2-1.2 1.4-2 2.6-1.6 1 .2 1.6 1.2 1.4 2.2zM316 306l1.3 54.1c0 .5-.4.8-.9.8-.4-.1-.7-.4-.7-.8L312 306c0-1.3 1.1-2.2 2.3-2 1 .2 1.7 1.1 1.7 2z" />
    </g>
    <path
      fill="#738DE0"
      d="M212.1 256.9c-1.1-1.3-1.9-2.6-2.5-3.9l-2.3-15.4 5.3 4.9-.5 14.4z"
    />
    <path
      fill="#273D7A"
      d="M361.3 262.1s-3.3 6.9-10.5 14.6c-9 9.6-24.2 20.5-46.8 20.5-15.9 0-27.7-5.3-36.1-11.7-13.2-10-18.4-22.8-18.4-22.8l111.8-.6z"
    />
    <path
      fill="#072359"
      d="M361.3 262.1s-3.3 6.9-10.5 14.6c-7.7 3-17.2 5.5-29 7.1-23.2 3.1-41.3 2.9-53.9 1.7-13.2-10-18.4-22.8-18.4-22.8l111.8-.6z"
    />
    <path
      fill="#99ADF9"
      d="M396.5 237s-.6 6.3-2.6 14.1c-.3 1.1-.8 2.4-1.6 3.6-2.1 3.4-6.1 7.1-12.6 10.6-1.1.6-2.4 1.2-3.7 1.8-1 .5-2 .9-3.1 1.4-1.5.6-3 1.2-4.6 1.8-5.6 2-12.2 3.7-20 5.3-.6.1-1.1.2-1.7.3-1.5.3-3.3.5-5.2.7-8 .9-18.6 1.5-29.9 1.7-2.1 0-4.2.1-6.3.1-10.7.1-21.5-.2-30.9-.7-2-.1-4-.2-5.8-.4-5.5-.4-10.3-1-13.8-1.7-5.1-1-9.7-2.1-13.8-3.3-1.7-.5-3.3-1-4.9-1.5-12.4-4.1-19.9-9.1-23.8-13.7-.6-.7-1.1-1.3-1.5-2-.4-.6-.8-1.3-1-1.9-.3-.7-.6-1.3-.7-2-.9-3.7-1.6-7.5-1.9-10.4-.4-3.3-.5-5.5-.5-5.5l95 7.1 95-5.3-.1-.1z"
    />
    <path
      fill="#273D7A"
      d="M396.4 236.8c0 .7-.5 1.6-1.4 2.7-2.5 2.9-8.5 7.2-18.7 11.1-1.3.5-2.7 1-4.2 1.5-.7.2-1.4.5-2.1.7-1.5.5-3.1 1-4.8 1.4-5.7 1.6-12.3 3.1-19.9 4.2-1.8.3-3.7.6-5.7.8-8.4 1.1-17.8 1.8-28.3 2-2 0-4.1.1-6.2.1h-.1c-10.7 0-20.6-.5-29.5-1.3-2-.2-4-.4-5.9-.6-9.8-1.1-18.5-2.7-26-4.5-1.7-.4-3.4-.9-5-1.3-14.9-4.1-24.7-9.2-29.2-13.4-.9-.8-1.6-1.7-2.1-2.4-.6-.9-.9-1.7-.9-2.5 0-7.1 28-22.2 99.1-22.2 71.1-.1 90.9 18.8 90.9 23.7z"
    />
    <path
      fill="#072359"
      d="m264.5 221.2-52 21.3c-2-1.3-4.8-4.1-5.3-4.9l55.6-17.3 1.7.9zM396.4 236.9c0 .6-.5 1.5-1.4 2.6l-53.4-18.3 1.7-.8 53.1 16.5zM273.3 226.7l-29.7 28.1c-1.7-.4-3.4-.9-5-1.3l32.9-26.9 1.8.1zM289.6 230l-14.1 30c-2-.2-4-.4-5.9-.6l18.2-29.5 1.8.1zM345.4 258.5c-1.8.3-3.8.6-5.7.8L325.9 230l1.9-.1 17.6 28.6zM311.3 261.3c-2 0-4.1.1-6.2.1h-.1l2.4-29.5 1.9-.1 2 29.5zM376.2 250.6c-1.3.5-2.7 1-4.2 1.5l-35.9-25.4 1.9-.1 38.2 24z"
    />
    <path
      fill="#738DE0"
      d="M311.4 278.1c-2.1 0-4.2.1-6.3.1v-16.9l6.2-.1.1 16.9zM346.4 275.7c-1.6.3-3.3.5-5.2.7l-1.6-17.2 5.7-.8 1.1 17.3zM379.6 265.2c-1.1.6-2.4 1.2-3.7 1.8l-3.8-15 4.1-1.4 3.4 14.6zM275.5 260l-1.2 17.5c-2-.1-4-.2-5.8-.4l1.2-17.7 5.8.6zM243.6 254.8l-2.8 17.3c-1.7-.5-3.3-1-4.9-1.5l2.6-17.1 5.1 1.3zM212.6 242.7l-2 12.3c-.4-.6-.8-1.3-1-1.9-.3-.7-.6-1.3-.7-2-.9-3.7-1.6-7.5-1.9-10.4l.3-3s1.7 2 2.4 2.7c.6.6 2.9 2.3 2.9 2.3z"
    />
    <ellipse fill="#072359" cx={300.8} cy={228.7} rx={53.3} ry={15.1} />
    <path
      fill="#99ADF9"
      d="M349.5 226.3s-3.9 4.4-13.5 8.2c-7.1 2.8-17.3 5.2-31.3 5.2-7.7 0-14.4-.7-20-1.8-18.7-3.6-26.8-11.4-26.8-11.4s4.1-30.4 29.7-40.7c5.2-2.1 11.4-3.4 18.6-3.4 35.2 0 43.3 43.9 43.3 43.9z"
    />
    <path
      fill="#7A97F4"
      d="M284.7 237.9c-18.7-3.6-26.8-11.4-26.8-11.4s4.1-30.4 29.7-40.7c-5 4.2-9.9 12.6-10.7 26.3-.8 10.2 1.6 18.7 7.8 25.8z"
    />
    <path
      fill="#C2D1FF"
      d="M349.5 226.3s-3.9 4.4-13.5 8.2c-1.5-5.6-3.8-10.6-3.8-10.6s-9.4 2-13.6-6.9c-4.2-8.9 5.9-15.3 5.9-15.3s-2.4-7.7-14.8-12.7c-12.4-5-22.3-3.2-22.3-3.2 5.2-2.1 11.4-3.4 18.6-3.4 35.4 0 43.5 43.9 43.5 43.9z"
    />
    <ellipse fill="#C2D1FF" cx={309.2} cy={204.9} rx={2.7} ry={2.6} />
    <ellipse fill="#C2D1FF" cx={299.8} cy={208} rx={2.1} ry={2} />
    <ellipse fill="#C2D1FF" cx={306.1} cy={219.5} rx={4.1} ry={4} />
  </svg>
  <p>
  The page you are looking for doesn't exist!
  </p>
  </SVGcontainer>
)

export default SvgComponent
