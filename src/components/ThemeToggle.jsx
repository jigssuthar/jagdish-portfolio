import { FiMoon, FiSun } from 'react-icons/fi'
export default function ThemeToggle({theme,setTheme}) { return <button className="icon-btn" aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`} onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?<FiSun/>:<FiMoon/>}</button> }
