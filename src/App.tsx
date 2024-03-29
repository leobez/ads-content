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
        <div className='h-screen flex flex-col'>
            <FeedbackContextProvider>
                <ClientContextProvider>
                    
                    <Feedback/>

                    <BrowserRouter basename='/chat-mqtt'>

                        <header className='h-20 flex justify-between items-center p-2 bg-zinc-800 text-zinc-100 font-bold'>
                            <Header/>
                            <Navbar/>
                        </header>

                        <main className='flex-1 overflow-y-auto p-1 xl:w-[1280px] xl:m-auto xl:bg-zinc-100 xl:border-x-2 xl:border-zinc-800 xl:p-4'>
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
