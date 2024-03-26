import './App.css'
import Page404 from './components/404/Page404'
import About from './components/About/About'
import Connection from './components/Connection/Connection'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { ClientContextProvider } from './context/ClientContext'
import { FeedbackContextProvider } from './context/FeedbackContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <div className='flex flex-col gap-[2px]'>
            <FeedbackContextProvider>
                <ClientContextProvider>

                    <BrowserRouter basename='/chat-mqtt'>

                        <header className='h-20 grid place-items-center'>
                            <Header/>
                        </header>

                        <div className='sticky top-[2px] z-[1] bg-white'>
                            <Navbar/>
                        </div>

                        <main className='border border-black'>
                            <Routes>
                                <Route path='*' element={<Page404/>}></Route>
                                <Route path='/' element={<Connection/>}></Route>
                                <Route path='/about' element={<About/>}></Route>
                            </Routes>
                        </main>

                    </BrowserRouter>
                    
                    <footer className='h-20 border border-black grid place-items-center'>
                        <Footer/>
                    </footer>
            
                </ClientContextProvider>
            </FeedbackContextProvider>
        </div>
    )

}

export default App
