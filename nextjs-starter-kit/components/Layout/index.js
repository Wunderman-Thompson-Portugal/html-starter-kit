import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import GenericHeader from "@/components/Layout/Header"
import GenericFooter from "@/components/Layout/Footer"

export default function MainLayout({ children }) {

    return (
        <>
            <GenericHeader>{children}</GenericHeader>
            <main>{children}</main>
            <GenericFooter>{children}</GenericFooter>
        </>
    )
}