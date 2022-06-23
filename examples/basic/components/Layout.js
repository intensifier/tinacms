import Head from 'next/head'

export const Layout = (props) => {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>Tina App</title>
          <meta name="description" content="A TinaCMS Application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
        <svg
          width="770"
          height="770"
          viewBox="0 0 770 770"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="svg-background"
        >
          <g clip-path="url(#clip0_211_417)">
            <rect width="770" height="770" fill="url(#paint0_linear_211_417)" />
            <g filter="url(#filter0_f_211_417)">
              <path
                d="M652.877 -86.4226C617.378 240.577 477.378 287.077 233.628 467.958C-10.1228 648.839 -104.326 333.133 86.0298 144.636C276.386 -43.8599 671.204 -255.239 652.877 -86.4226Z"
                fill="url(#paint1_linear_211_417)"
              />
            </g>
            <g filter="url(#filter1_f_211_417)">
              <path
                d="M840.159 342.807C991.352 597.408 932.87 980.524 661.597 966.909C390.324 953.293 263.4 588.819 396.891 372.306C530.382 155.794 688.966 88.2067 840.159 342.807Z"
                fill="url(#paint2_linear_211_417)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_211_417"
              x="-175.245"
              y="-308.088"
              width="988.739"
              height="990.08"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_211_417"
              />
            </filter>
            <filter
              id="filter1_f_211_417"
              x="183.426"
              y="19.0366"
              width="898.354"
              height="1108.23"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_211_417"
              />
            </filter>
            <linearGradient
              id="paint0_linear_211_417"
              x1="770"
              y1="770"
              x2="-159.335"
              y2="372.794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F97CB" />
              <stop offset="0.302083" stop-color="#46C6D1" />
              <stop offset="0.640625" stop-color="#96E6D8" />
              <stop offset="1" stop-color="#A5EDDC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_211_417"
              x1="217.878"
              y1="347.077"
              x2="433.107"
              y2="-77.4733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A5EDDC" />
              <stop offset="1" stop-color="#46C6D1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_211_417"
              x1="556.832"
              y1="839.302"
              x2="865.998"
              y2="468.606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#68D9D4" stop-opacity="0.6" />
              <stop offset="1" stop-color="#B4F4E0" />
            </linearGradient>
            <clipPath id="clip0_211_417">
              <rect width="770" height="770" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg className="noise-filter">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="7"
              numOctaves="5"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
      </div>
      <style jsx>{`
        :global(:root) {
          --blue-0: #ffffff;
          --blue-50: #f2fdfc;
          --blue-100: #e6faf8;
          --blue-150: #d1faf6;
          --blue-200: #c2f7eb;
          --blue-250: #b4f4e0;
          --blue-300: #a5eddc;
          --blue-350: #96e7d8;
          --blue-400: #68d9d4;
          --blue-450: #46c6d1;
          --blue-500: #2ab7cf;
          --blue-550: #1f97cb;
          --blue-600: #2280c3;
          --blue-650: #1b61b1;
          --blue-700: #163f92;
          --blue-750: #10267f;
          --blue-800: #121264;
          --blue-850: #120849;
          --blue-900: #110431;
          --blue-950: #09011e;
          --blue-1000: #000000;

          --tina-blue: rgb(5, 116, 228);
        }

        :global(body) {
          margin: 0;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          font-family: Inter;
        }

        .container {
          padding: 32px;
        }

        .noise-filter {
          position: absolute;
          visibility: hidden;
        }

        .wrapper:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0 10px 10px 0;
          filter: url(#noiseFilter) brightness(0.7) contrast(150%);
          background: black;
          z-index: 99999;
          mix-blend-mode: hard-light;
          pointer-events: none;
          opacity: 0.3;
        }

        .svg-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      `}</style>
    </>
  )
}
