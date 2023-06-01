import Card from "./Card";
import { Typography } from "@material-tailwind/react";

const MainSection = () => {
    return (
        <div className="w-full container">
            <Typography
            variant="h4"
            color="teal"
            className="text-center font-semibold py-10"
            >
                Our Featured Contents
            </Typography>
            <div className="mx-28">
            <Card/>

            </div>
        </div>
    )
}

export default MainSection;