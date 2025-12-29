
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
const Layout = ({children}) => {
  return (
    <Box>
    
    <div>
        {children}
         <Header />
    </div>
   
    <Footer/>
    </Box>
  )
}

export default Layout