import './App.css'
import Page404 from './components/404/Page404'
import About from './components/About/About'
import Connection from './components/Connection/Connection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { ClientContextProvider } from './context/ClientContext'
import { FeedbackContextProvider } from './context/FeedbackContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <div className='h-screen flex flex-col'>
            <FeedbackContextProvider>
                <ClientContextProvider>
                    
                    <BrowserRouter basename='/chat-mqtt'>

                        <header className='h-20 flex justify-between items-center p-2 bg-zinc-800 text-zinc-100 font-bold'>
                            <Header/>
                            <Navbar/>
                        </header>

                        <main className='flex-1 overflow-y-auto max-w-5xl p-1'>
                            <Routes>
                                <Route path='*' element={<Page404/>}></Route>
                                <Route path='/' element={<Connection/>}></Route>
                                <Route path='/about' element={<About/>}></Route>
                            </Routes>
                        </main>

                    </BrowserRouter>
                    
                    <footer className='h-20 text-zinc-100 font-bold bg-zinc-800 grid place-items-center'>
                        <Footer/>
                    </footer>
            
                </ClientContextProvider>
            </FeedbackContextProvider>
        </div>
    )

}

export default App
