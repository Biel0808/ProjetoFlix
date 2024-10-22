import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {

    const settings = {
        dots: false, //bolinhas que reprsenta cada item
        infinite: false,
        speed: 500,
        variableWidth:true, //responsivdade de width
        adaptativeHeight:true,//responsividade de height
        //slidesToShow: 5, //slides por tela
        slidesToScroll: 1 //slides por scrool ou clicar na setinha
    };
    return (
        <div>
            <Slider {...settings}> 
                {children}
            </Slider>
        </div>
    );
}
export default Carousel;