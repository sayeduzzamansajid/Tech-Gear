import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Tech-Gear | Premium Gadgets & Electronics",
    description: "Discover the latest gadgets and electronics at Tech-Gear. Premium quality products for tech enthusiasts.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
