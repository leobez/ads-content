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
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <div className="App">
            <FeedbackContextProvider>
                <ClientContextProvider>

                    <Feedback/>

                    <BrowserRouter>
                    
                        <header>
                            <Header/>
                        </header>

                        <main>
                            <Navbar/>

                            <Routes>
                                <Route path='/ads-content/chatmqtt/dist/index.html' element={<Navigate to="/"/>}></Route>
                                <Route path='*' element={<Page404/>}></Route>
                                <Route path='/' element={<Connection/>}></Route>
                                <Route path='/about' element={<About/>}></Route>
                            </Routes>
                        </main>
                    </BrowserRouter>
                    

                    <footer>
                        <Footer/>
                    </footer>
            
                </ClientContextProvider>
            </FeedbackContextProvider>
        </div>
    )

}

export default App
