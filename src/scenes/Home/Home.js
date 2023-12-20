import cloud1 from "./imgs/cloud_1.svg";
import Truck1 from './imgs/Truck.svg';
import Truck2 from './imgs/Truck 2.svg';
import Airplane from './imgs/Airplane.svg';
import cloud2 from './imgs/cloud_2.svg';
import cloud3 from './imgs/Cloud 3.svg';

import manSearch from './imgs/man-search-svgrepo-com.svg';
import staffPersonel from './imgs/staff-personnel-structure-management-svgrepo-com.svg';
import deadlineTime from './imgs/deadline-time-flame-time-svgrepo-com.svg';

import blob1 from './imgs/Blob1.svg';
import blob2 from './imgs/Blob2.svg';
import blob3 from './imgs/Blob3.svg';

import world from './imgs/world-svgrepo-com.svg';
import list from './imgs/checklist-svgrepo-com.svg';
import group from './imgs/group-svgrepo-com.svg';
import house from './imgs/house-svgrepo-com.svg';
import graduation from './imgs/graduation-svgrepo-com.svg';
import plane from './imgs/plane-svgrepo-com.svg';

import slide_image from './imgs/optymalizacja_procesow1.png';
import slide_image2 from './imgs/optymalizacja_procesow2.png';
import slide_image3 from './imgs/optymalizacja_procesow3.png';


import Slider from "react-slick";
import { useState } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLast, ChevronLeft, ChevronRight, X } from "lucide-react";

import LogoApp from './imgs/LogoMain.svg';
import TrippleMuffin from './imgs/TrippleMuffin.svg';



const images = [slide_image, slide_image2, slide_image3];

function Home() {

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <ChevronRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <ChevronLeft />
          </div>
        );
      };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true, // Włącza automatyczne odtwarzanie
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
      
    const slidesContentTitle = [
        "ROZWÓJ",
        "OPTYMALIZACJA",
        "PROBLEMY",
    ];

    const slidesContentDesc = [
        "Chciałbyś rozwijać dany obszar Twojej firmy, ale nie wiesz jak to zrobić?",
        "Chciałbyś, aby ktoś z zewnątrz powiedział Ci, czy Twój biznes dobrze funkcjonuje i jak można usprawnić jego działanie?",
        "Zauważasz, że w Twojej firmie występuje istotny problem, ale nikt w Twoim zespole nie ma wystarczającej wiedzy, aby go rozwiązać.",
    ];

    return (
        <div>

            <div className="w-full flex-col flex justify-center items-center relative">
                <div className="py-[3.5%]">
                    <h2 className="z-5 max-lg:text-5xl lg:text-6xl xl:text-9xl mb-2 font-bold">LOGISTIC</h2>
                    <p className="z-5 text-right max-lg:text-lg lg:text-xl xl:text-3xl">We are here for you!</p>
                </div>
                
                <img src={Truck1} alt="" width='30%' className="absolute z-0 bottom-0 left-[5%]"/>
                <img src={Truck2} alt="" width='18%' className="absolute bottom-0 right-[7%]"/>
                <img src={Airplane} alt="" width='10%' className="absolute top-[20%] right-[25%]" />
                <img src={cloud1} alt="" width='5%' className="absolute top-[16%] left-[20%]" />
                <img src={cloud2} alt="" width='8%' className="absolute top-[25%] right-[15%]" />
                <img src={cloud3} alt="" width='3%' className="absolute top-[8%] left-[40%]" />
            </div>

            <div className="bg-[#2491c7] w-full">
                <div className="py-10 flex w-full max-md:flex-col max-md:justify-center justify-between px-[10%] items-center max-w-[1920px] mx-auto">
                    <div className="flex text-white justify-center items-center max-md:mb-7 w-[80%]">
                        <img src={manSearch} className="mr-2 max-md:w-[50px] md:w-[60px] lg:w-[70px]" alt="" />
                        <div className="flex flex-col">
                            <p className="font-semibold max-sm:text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl">Analizujemy</p>
                            <p className="font-light max-sm:text-xs sm:text-sm md:text-sm lg:text-md xl:text-md">Badamy obszary problemowe i wąskie gardła.</p>
                        </div>
                    </div>
                    <div className="flex text-white justify-center items-center md:mx-5 max-md:mb-7 w-[80%]">
                        <img src={staffPersonel} alt="" className="mr-2 max-md:w-[50px] md:w-[60px] lg:w-[70px]"/>
                        <div className="flex flex-col">
                            <p className="font-semibold max-sm:text-sm sm:text-lg  md:text-lg lg:text-xl xl:text-xl">Wdrażamy</p>
                            <p className="font-light max-sm:text-xs sm:text-sm md:text-sm lg:text-md xl:text-md">Przeprowadzamy wdrożenia i szkolenia dla zespołu.</p>
                        </div>
                    </div>
                    <div className="flex text-white justify-center items-center w-[80%]">
                        <img src={deadlineTime} alt="" className="mr-2 max-md:w-[50px] md:w-[60px] lg:w-[70px]"/>
                        <div className="flex flex-col">
                            <p className="font-semibold max-sm:text-md sm:text-lg  md:text-lg lg:text-xl xl:text-xl">Optymalizujemy</p>
                            <p className="pr-0 mr-0 font-light max-sm:text-xs sm:text-sm md:text-sm lg:text-md xl:text-md">Dostosowujemy i konfigurujemy dążąc do ideału.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer2 layer2"></div>

            <div className="flex flex-col justify-center items-center px-[5%] max-w-[1920px] mx-auto">
                <h2 className="font-black text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 text-[#fff] relative"><span className="bg-[#2491c7] bg-clip-text text-transparent px-2 py-1">DLACZEGO MY?</span></h2>
                <div className="w-full flex justify-start items-center mb-8 md:mb-5 xl:mb-0">
                    <div className="w-[17%]">
                        <div className="">
                            <img src={blob1} className="w-full object-cover p-[10%]" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <h4 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold md:mb-3">OTWARCI I DOSTĘPNI</h4>
                        <p className="font-light text-xs md:text-base lg:text-xl xl:text-2xl text-gray-600">Chętnie przyjedziemy, przedstawimy ofertę i porozmawiamy o Państwa zyskach!</p>
                    </div>
                    <div className="w-[20%] xl:w-[50%]"></div>
                </div>
                <div className="w-full flex justify-end text-right items-center mb-8 md:mb-5 xl:mb-0 xl:mt-[-5%]">
                    <div className="w-[20%] xl:w-[50%]"></div>
                    <div className="flex flex-col w-[80%] flex-1">
                        <h4 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold md:mb-3">NIESZABLONOWI</h4>
                        <p className="font-light text-xs md:text-base lg:text-xl xl:text-2xl text-gray-600">Posiadamy niecodzienną metodykę pracy, która nie stanowi utartych schematów.</p>
                    </div>
                    <div className="w-[17%]">
                        <div className="">
                            <img src={blob2} className="w-full object-cover p-[10%]" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-center xl:mt-[-5%] mb-8 md:mb-9">
                    <div className="w-[17%]">
                        <div className="">
                            <img src={blob3} className="w-full object-cover p-[10%]" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[80%] flex-1">
                        <h4 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold md:mb-3">INTERDYSCYPLINARNI</h4>
                        <p className="font-light text-xs md:text-base lg:text-xl xl:text-2xl text-gray-600">Posiadamy ekspertów z wielu dziedzin, co sprawia, że zaopiekujemy się Państwem w sposób kompleksowy.</p>
                    </div>
                    <div className="w-[20%] xl:w-[50%]"></div>
                </div>
                <div className="flex group flex-col justify-center items-center">
                    <span className="text-sm md:text-md lg:text-2xl xl:text-4xl font-bold mb-3">NIE CZEKAJ!</span>
                    <button className="cursor rounded-full hover:shadow-[0_5px_9px_1px_rgba(0,0,0,0.3)] bg-[#68A8CD] text-white text-xs md:text-xs lg:text-md xl:text-xl px-5 md:px-10 py-1 md:py-3 before:ease relative overflow-hidden border  transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-10 before:translate-x-24 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-60 flex">Skontaktuj się</button>
                </div>
            </div>


            <div className="spacer layer1"></div>


            <div className="w-full flex flex-col bg-[#2491c7]">
                <div className="px-[5%] max-w-[1920px] mx-auto">
                    <div className="flex flex-col justify-start text-white pt-4">
                        <span className="font-light text-xs md:text-lg xl:text-2xl">Czym się zajmujemy?</span>
                        <span className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Zakres naszych możliwości:</span>
                        <hr className="mt-1 md:mt-2 w-[60%] md:w-[30%] h-[5px] md:h-[10px] mb-5 lg:mb-11 rounded-full bg-white" />
                    </div>
                    <div className="w-full flex flex-wrap  justify-center items-center md:mb-[10%]">
                        <div className="md:mb-[10%] md:mt-[5%] md:flex">
                            <div className="flex md:w-1/3 mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={world} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex w-[80%] flex-col text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Logistyka</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Identyfikujemy i eliminujemy wszystkie wąskie gardła. Sprawiamy, że logistyka wchodzi na zupełnie nowy - wyższy poziom</span>
                                </div>
                            </div>
                            <div className="flex md:w-1/3  mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={list} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex flex-col w-[80%] text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Zarządzanie procesami</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Staramy się, aby wszystkie procesy były usprawnione, a przedsiębiorstwo działało tak efektywnie, jak tylko jest to możliwe.</span>
                                </div>
                            </div>
                            <div className="flex md:w-1/3 mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={group} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex flex-col w-[80%] text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Obsługa klienta</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Obsługa obiekcji, skarg i reklamacji klienta. Uczymy najlepszych praktyk pracy z klientami i sztuki negocjacji</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex">
                            <div className="flex md:w-1/3 mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={house} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex w-[80%] flex-col text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Gospodarka magazynowa</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Optymalizujemy procesy magazynowe, zarządzamy przestrzenią magazynową.</span>
                                </div>
                            </div>
                            <div className="flex md:w-1/3  mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={graduation} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex flex-col w-[80%] text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Szkolenia</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Oferujemy pakiet szkoleń zamkniętych dla firm z wybranych zagadnień związanych z logistyką i zarządzaniem</span>
                                </div>
                            </div>
                            <div className="flex md:w-1/3 mb-8 md:mb-0 items-center">
                                <div className="w-[15%] mr-3">
                                    <img src={plane} className="w-[full] max-md:w-[70%] object-contain" />
                                </div>
                                <div className="flex flex-col w-[80%] text-white">
                                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Dystrybucja</span>
                                    <span className="text-xs md:text-md lg:text-lg xl:text-xl font-extralight">Usprawniamy procesy dystrybucyjne i wdrażamy elastyczne łańcuchy dostaw.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="spacer3 layer3 mb-5 md:mb-10"></div>

            <div className="px-[10%] w-full max-w-[1920px] mx-auto">
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col ml-[10%] mb-7 xl:mb-[8%] justify-center items-start">
                        <span className="text-gradient font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ml-[-15%] ">MAŁO?</span>
                        <span className="text-gradient font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-[-5%]">NASZE <span className="text-[#89dbff]">PORTFOLIO</span></span>
                    </div>
                    <div className="w-full">
                        <div className="w-[90%] text-gray-500 justify-center items-start">
                            <span className="text-xs sm:text-md md:text-base lg:text-lg xl:text-2xl font-extralight italic">„Marzenia nie spełniają się tylko dlatego, że marzysz. To ciężka praca sprawia, że wszystko się urzeczywistnia. To ciężka praca kreuje zmiany”</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xs md:text-base lg:text-lg xl:text-xl font-light">- Shonda Rhimes</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-xs lg:text-lg cursor rounded-full mt-4 bg-[#000] text-white px-[5%] py-[1%] shadow-[0_5px_9px_1px_rgba(0,0,0,0.3)] hover:before:bg-redborder-black relative  overflow-hidden border border-black  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-[#000] hover:shadow-white hover:before:left-0 hover:before:w-full">
                                <span className="relative z-10">PORTFOLIO</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-[5%] px-[5%] m-auto max-w-[1920px]"/>

            <div className="px-[5%] mt-[5%] w-full max-w-[1920px] mx-auto flex flex-col">
                <div className="flex flex-col">
                    <span className="text-gradient font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><span className="text-[#2491c7]">KIEDY</span> NAS</span>
                    <span className="text-gradient ml-10 mt-[-2%] md:mt-[-1%] lg:mt-[-1%] xl:mt-[-1%] font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">POTRZEBUJESZ?</span>
                </div>
                <div className="w-full mt-8">
                    <div className="w-[80%] m-auto mb-10">
                        <Slider {...settings}>
                            {images.map((img, idx) => (
                                <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                    <div 
                                        className="px-10 py-7 h-[200px] xs:h-[300px] md:h-[300px] flex flex-col"
                                        key={idx} 
                                        style={{ 
                                            backgroundImage: `url(${img})`,
                                            backgroundSize: 'cover', // pokrywa cały div
                                            backgroundPosition: 'center', // centruje obraz
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-4xl">{slidesContentTitle[idx]}</span>
                                        <hr className="h-[2px] w-[40%] bg-white my-3"/>
                                        <span className="text-white w-[80%] text-center text-xs md:text-md lg:text-lg xl:text-xl">{slidesContentDesc[idx]}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    
                </div>
            </div>

            <div className="spacer4 layer4"></div>

            <div className="bg-[#2491c7]">
                <div className="pt-[5%] pb-[4%] px-[5%] text-white w-full max-w-[1920px] mx-auto flex flex-col">
                    <span className="font-semibold text-lg sm:text-xl mb-2 md:text-2xl lg:text-4xl xl:text-5xl">Liczby nie kłamią..</span>
                    <hr className="bg-white h-[4px] w-[15%] mb-10 max-xs:mb-20" />
                    <div className="flex max-sm:flex-col justify-center items-center sm:divide-x">
                        <div className="flex flex-col justify-center items-center max-md:mb-5 px-4 xl:px-20">
                            <span className="font-bold text-3xl lg:text-4xl xl:text-5xl">78</span>
                            <span className="font-light text-center text-md lg:text-lg xl:text-xl">Zrealizowanych projektów</span>
                        </div>
                        <hr className="max-sm:bg-white max-sm:h-[1px] max-sm:mb-4 max-sm:w-[60%]"/>
                        <div className="flex flex-col justify-center items-center max-md:mb-5 px-4 xl:px-20">
                            <span className="font-bold text-3xl lg:text-4xl xl:text-5xl">5mln</span>
                            <span className="font-light text-center text-md lg:text-lg xl:text-xl">Tyle dzięki nam zaoszczędzono</span>
                        </div>
                        <hr className="max-sm:bg-white max-sm:h-[1px] max-sm:mb-4 max-sm:w-[60%]"/>
                        <div className="flex flex-col justify-center items-center max-md:mb-5 px-4 xl:px-20">
                            <span className="font-bold text-3xl lg:text-4xl xl:text-5xl">1500</span>
                            <span className="font-light text-center text-md lg:text-lg xl:text-xl">Przeszkolonych osób na szkoleniach</span>
                        </div>
                        <hr className="max-sm:bg-white max-sm:h-[1px] max-sm:mb-4 max-sm:w-[60%]"/>
                        <div className="flex flex-col justify-center items-center max-md:mb-5 px-4 xl:px-20">
                            <span className="font-bold text-3xl lg:text-4xl xl:text-5xl">22</span>
                            <span className="font-light text-center text-md lg:text-lg xl:text-xl">Lat doświadczeńa</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer5 layer5 mb-[-10rem]"></div>

            <hr className="mt-[5%] px-[5%] m-auto max-w-[1920px]"/>

            <div className="w-full max-w-[1920px] mx-auto px-[5%] py-[3%]">
                <div className="flex flex-col px-[20%] justify-around items-center">
                    <div className="flex justify-center items-center mb-10">
                        <img src={LogoApp} width={150} />
                        <X size={30} className="mx-[2rem]"/>
                        <img src={TrippleMuffin} width={100} />
                    </div>
                    <span>© 2023 | Strona stworzona przez Tripple Muffin</span>
                </div>
            </div>

        </div>
    );
}

export default Home;