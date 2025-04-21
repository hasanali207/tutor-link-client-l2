import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";




const CommonLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <>
            <NavBar/>
            <main className="min-h-screen">{children}</main>
            
            <Footer/>
        </>
    );
};

export default CommonLayout;

