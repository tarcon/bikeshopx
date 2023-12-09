import { FC, h } from "nano-jsx";

export function Logo({
  color = "#FF5C00",
  className = "",
  style,
}: {
  color: string;
  className?: string;
  style?: object;
}) {
  return (
    <svg
      viewBox="0 0 193 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M18.4196 1.04C21.6876 1.04 24.0096 1.75667 25.3856 3.19C26.4176 4.27933 26.9336 5.65533 26.9336 7.318C26.9336 7.89133 26.8763 8.49333 26.7616 9.124L26.3746 11.188C26.0593 12.822 25.4429 14.0977 24.5256 15.015C23.6369 15.9323 22.8486 16.391 22.1606 16.391L22.1176 16.735C22.9203 16.735 23.7373 17.1793 24.5686 18.068C25.3999 18.9567 25.8156 20.003 25.8156 21.207C25.8156 21.6943 25.7583 22.2103 25.6436 22.755L25.3856 24.088C24.9269 26.5533 23.8233 28.4883 22.0746 29.893C20.3546 31.2977 17.9466 32 14.8506 32H0.4886L5.9496 1.04H18.4196ZM14.5496 19.358H10.4646L9.4326 25.292H13.5176C13.5749 25.292 13.6323 25.292 13.6896 25.292C15.0083 25.292 16.0546 24.991 16.8286 24.389C17.6026 23.7583 17.9896 22.9987 17.9896 22.11C17.9896 20.2753 16.8429 19.358 14.5496 19.358ZM15.7106 7.748H12.4856L11.3676 14.155H14.5496C17.3016 14.155 18.6776 12.951 18.6776 10.543C18.6776 9.71167 18.4196 9.038 17.9036 8.522C17.4163 8.006 16.6853 7.748 15.7106 7.748ZM39.3704 1.04L33.9524 32H26.1694L31.6304 1.04H39.3704ZM67.4608 1.04L57.6138 16.649L61.9998 32H53.8298L50.6048 20.648H47.2078L45.1868 32H37.4468L42.9078 1.04H50.6478L48.3688 13.94H51.1208L59.2908 1.04H67.4608ZM84.6715 32H63.0855L68.5465 1.04H90.1325L88.9285 7.748H75.0825L74.0935 13.553H85.5315L84.3275 20.261H72.8895L72.0295 25.292H85.8755L84.6715 32ZM95.2576 23.185C95.2576 25.163 96.6766 26.152 99.5146 26.152C102.381 26.152 103.815 25.2633 103.815 23.486C103.815 22.54 103.327 21.766 102.353 21.164C101.378 20.562 100.188 20.0603 98.7836 19.659C97.4076 19.2577 96.0172 18.799 94.6126 18.283C93.2366 17.7383 92.0612 16.907 91.0866 15.789C90.1119 14.6423 89.6246 13.2233 89.6246 11.532C89.6246 4.33666 94.2542 0.738998 103.514 0.738998C106.896 0.738998 109.448 1.384 111.168 2.674C112.916 3.93533 113.791 5.69833 113.791 7.963C113.791 8.79433 113.676 9.597 113.447 10.371C113.246 11.1163 113.031 11.6467 112.802 11.962L112.458 12.478H104.847C105.477 11.8187 105.793 10.9873 105.793 9.984C105.793 8.12067 104.574 7.189 102.138 7.189C99.0702 7.189 97.5366 8.16367 97.5366 10.113C97.5366 11.0877 98.0239 11.8617 98.9986 12.435C99.9732 13.0083 101.149 13.467 102.525 13.811C103.929 14.1263 105.334 14.5277 106.739 15.015C108.143 15.5023 109.333 16.3193 110.308 17.466C111.282 18.584 111.77 20.046 111.77 21.852C111.77 25.4927 110.68 28.2017 108.502 29.979C106.323 31.7277 102.969 32.602 98.4396 32.602C93.9102 32.602 90.8142 31.7993 89.1516 30.194C87.9189 28.99 87.3026 27.3273 87.3026 25.206C87.3026 24.4033 87.3886 23.529 87.5606 22.583L87.6896 21.895H95.4296L95.3436 22.411C95.2862 22.6977 95.2576 22.9557 95.2576 23.185ZM141.673 1.04L136.255 32H128.472L130.45 20.82H122.065L120.13 32H112.347L117.808 1.04H125.548L123.226 14.112H131.611L133.933 1.04H141.673ZM156.477 0.738998C163.385 0.738998 166.84 3.56266 166.84 9.21C166.84 10.156 166.739 11.1737 166.539 12.263L165.034 20.863C164.346 24.8477 162.855 27.8003 160.562 29.721C158.268 31.6417 155.043 32.602 150.887 32.602C146.73 32.602 143.835 31.6417 142.201 29.721C141.083 28.4023 140.524 26.582 140.524 24.26C140.524 23.228 140.638 22.0957 140.868 20.863L142.373 12.263C143.72 4.58033 148.421 0.738998 156.477 0.738998ZM152.048 25.937C153.481 25.937 154.628 25.5643 155.488 24.819C156.348 24.0737 156.95 22.6977 157.294 20.691L158.756 12.435C158.842 11.8617 158.885 11.3457 158.885 10.887C158.885 8.565 157.709 7.404 155.359 7.404C152.406 7.46133 150.643 9.13833 150.07 12.435L148.608 20.691C148.493 21.4077 148.436 22.153 148.436 22.927C148.436 24.9337 149.64 25.937 152.048 25.937ZM180.259 22.583H175.142L173.465 32H165.725L171.186 1.04H184.301C187.54 1.04 189.848 1.78533 191.224 3.276C192.227 4.42267 192.729 5.88467 192.729 7.662C192.729 8.264 192.671 8.89467 192.557 9.554L191.697 14.413C191.267 16.7923 190.005 18.756 187.913 20.304C185.82 21.8233 183.269 22.583 180.259 22.583ZM181.592 7.748H177.722L176.303 15.875H180.13C182.48 15.875 183.842 14.8287 184.215 12.736L184.516 10.973C184.573 10.715 184.602 10.371 184.602 9.941C184.602 9.511 184.387 9.038 183.957 8.522C183.527 8.006 182.738 7.748 181.592 7.748Z"
        fill={color}
      />
    </svg>
  );
}
