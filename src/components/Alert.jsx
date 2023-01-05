export function Alert({ message }) {
  return (
    <div>
      {/* <span>
            {message}
        </span> */}
      <span class="inline-flex text-sm text-red-700 duration-1 ease-in-out">
        {message}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  )
}
