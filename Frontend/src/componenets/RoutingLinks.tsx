import Contact from "@/pages/Contact"
import HomePage from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Upload from "@/pages/Upload"
import { Route, Routes } from 'react-router-dom'
import FlashCards from "@/pages/FlashCards"
import About from "@/pages/About"
import License from "@/pages/License"

const RoutingLinks = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cards' element={<FlashCards />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/about' element={<About />} />
            <Route path='/license' element={<License />} />
        </Routes>
    )
}

export default RoutingLinks