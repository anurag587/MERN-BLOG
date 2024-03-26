import { useSelector } from "react-redux";

export function ThemeProvider ({children}){
    const { theme } = useSelector((state) => state.theme);
    return(
        <div className={theme}>
        <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen'>
            {children} 
            {/* children is the app component that is passed inside its parent component i.e themeProvider component */}
        </div>
      </div>
    )
}