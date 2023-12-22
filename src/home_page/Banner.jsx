import { Button } from "@mui/material";
import { Link } from "react-router-dom";



const Banner = () => {
        
     

    return (
        <div className="bg-[url('https://i.ibb.co/S56hzzL/SEO-Recycle-Best-Practices-For-Setting-Up-Effective-Trello-Boards-1.png')] w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center">
            <div className="mt-32">
                {
                    
                        <Link to='/dashboard'>
                            <Button sx={{ padding: '15px 40px', fontSize: '1.5rem', backgroundColor: '#f07bd7', borderRadius: '45px' }} variant="contained">Let’s Explore</Button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Banner;