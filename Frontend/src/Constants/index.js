import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

export const useNavLinks = () => {
    const {newsLoading,setNewsLoading,recentStudiesClicked,setRecentStudiesClicked} = useContext(Context);

    const navLinks = [
        { label: "Recent Studies", onClick: ()=> {
            setNewsLoading(true);
            setRecentStudiesClicked(!recentStudiesClicked);

        }},

        { href: "#about-us", label: "About Us" },

        { href: "#predict", label: "Predict Now" },

        { href: "https://github.com/AravCodes/MentalCare", label: "Git repo" },
    ];

    return navLinks;
}