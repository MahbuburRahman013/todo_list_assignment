import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../auth/AuthProvider";


const Banner = () => {
        const {user} = useContext(ContextProvider)
     

    return (
        <div className="bg-[url('https://i.ibb.co/S56hzzL/SEO-Recycle-Best-Practices-For-Setting-Up-Effective-Trello-Boards-1.png')] w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center">
            <div className="mt-32">
                {
                    user ?
                        <Link to='/dashboard'>
                            <Button sx={{ padding: '15px 40px', fontSize: '1.5rem', backgroundColor: '#f07bd7', borderRadius: '45px' }} variant="contained">Let’s Explore</Button>
                        </Link> :
                        <Link to='/login'>
                            <Button sx={{ padding: '15px 40px', fontSize: '1.5rem', backgroundColor: '#f07bd7', borderRadius: '45px' }} variant="contained">Let’s Explore</Button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Banner;