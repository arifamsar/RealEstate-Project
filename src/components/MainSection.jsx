import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

// import image
import image1 from "../assets/property/1.png";
import image2 from "../assets/property/2.png";
import image3 from "../assets/property/3.png";
import image4 from "../assets/property/4.png";

const property = [
  { name: 'Property 1', Image: image1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequatur dolorum aliquam aut ipsam id quaerat eum ipsum. Voluptates, eius?',id: 1 },
  { name: 'Property 2', Image: image2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit minus dolore velit praesentium cumque, facere ut. Ipsam, est hic.',id: 2 },
  { name: 'Property 3', Image: image3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam, illo minima modi sed qui atque delectus dignissimos impedit doloribus.',id: 3 },
  { name: 'Property 4', Image: image4, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit reprehenderit maiores assumenda iste corrupti error corporis sequi labore obcaecati dicta!',id: 4 }
]

const MainSection = () => {

  const listProperty = property.map(item =>
    <Card className="mb-10 mx-10 mt-6 w-96"
    key={item.id}
    >
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={item.Image} alt={item.name} layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.name}
        </Typography>
        <Typography>
          {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#">
        <Button
        variant="gradient"
        color="cyan"
        >Reserve Now</Button>
        </a>
      </CardFooter>
    </Card>
    )
  return (
    <div className="w-full container mx-auto">
      <Typography variant="h4" className="text-center text-primary font-semibold py-10">
        Our Featured Contents
      </Typography>
      <ul>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {listProperty}
        </div>
      </ul>
    </div>
  );
};

export default MainSection;
