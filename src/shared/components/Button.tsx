export const Button = ({ onclick, text }: { onclick?: () => void; text: string }) => {
  return (
    <button
      onClick={onclick}
      style={{ cursor: 'pointer' }}
      className="text-main bg-secondary-own px-6 py-3 rounded-lg min-w-40 font-medium
                 hover:scale-105 hover:shadow-lg 
                 active:scale-95
                 transition-all duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-secondary-own focus:ring-offset-2"
    >
      {text}
    </button>
  )
}
