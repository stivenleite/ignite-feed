import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="bg-neutral-800 flex justify-center py-5">
      <img src={Logo} alt="Logo" className="h-8" />
    </div>
  )
}
