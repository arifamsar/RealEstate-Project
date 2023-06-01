import { Carousel, Typography } from "@material-tailwind/react";
 
export default function carousel() {
  return (
    <Carousel
      className="rounded-none lg:rounded-lg lg:w-5/6 w-full mx-auto"
      loop = {true}
      autoplay = {true}
      autoplayDelay={7000}
      prevArrow= {false}
      nextArrow= {false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="lg:h-[600px] h-[300px] md:h-[500px] w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-start p-10 bg-black/50">
        <div className="w-3/4 text-left md:w-2/4">
          <Typography
          variant="h1"
          color="white"
          className="mb-4 text-2xl md:text-xl lg:text-3xl"
          >
          Lorem ipsum dolor sit amet.  
          </Typography>
          <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?
            </Typography>
        </div>
      </div>
      </div>
      <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="lg:h-[600px] h-[300px] md:h-[500px] w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center p-10 bg-black/50">
        <div className="w-3/4 text-left md:w-2/4">
          <Typography
          variant="h1"
          color="white"
          className="mb-4 text-2xl md:text-xl lg:text-3xl"
          >
          Lorem ipsum dolor sit amet.  
          </Typography>
          <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?
            </Typography>
        </div>
      </div>
      </div>
      <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="lg:h-[600px] h-[300px] md:h-[500px] w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-end p-10 bg-black/50">
        <div className="w-3/4 text-left md:w-2/4">
          <Typography
          variant="h1"
          color="white"
          className="mb-4 text-2xl md:text-xl lg:text-3xl"
          >
          Lorem ipsum dolor sit amet.  
          </Typography>
          <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?
            </Typography>
        </div>
      </div>
      </div>
    </Carousel>
  );
}