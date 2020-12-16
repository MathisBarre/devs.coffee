export default function HeaderLink({ text, href, active, isDesktop, disabled }) {
  return (
    <a
      href={href}
      className={`
        ${isDesktop ? '' : 'block'}
        ${
          disabled
            ? 'cursor-not-allowed text-gray-500'
            : 'text-gray-300 hover:text-white hover:bg-gray-700  dark:hover:bg-gray-1100'
        }
        px-3 py-2 rounded-md text-sm font-semibold
      `}
    >
      {text}
    </a>
  )
}