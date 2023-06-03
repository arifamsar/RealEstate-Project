import Image from '../assets/Hero.png'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const About = () => {
    return (
        // import background image
        <div id='about' className="bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl text-white font-bold">About Us</h1>
                <p 
                className="text-white text-center text-lg mt-5 px-10"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque nam, at expedita nostrum assumenda est magni possimus numquam enim, accusantium non. Quaerat dolorum, minus unde ab consectetur voluptas sint.
                </p>
                {/* // Our Social Media */}
                <h1 className='pt-5 text-2xl text-white font-medium'>Find Our Social Media Below</h1>
                <div className="flex flex-row gap-4 mt-5">
                    <a href="#" className="text-white hover:text-cyan-400">
                        <BsFacebook className='text-2xl'/>
                    </a>
                    <a href="#" className="text-white hover:text-cyan-400">
                        <BsTwitter className='text-2xl'/>
                    </a>
                    <a href="#" className="text-white hover:text-cyan-400">
                        <BsInstagram className='text-2xl' />
                    </a>
                    </div>
            </div>
        </div>
    )
}

export default About;