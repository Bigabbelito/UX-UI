import  { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement,Tooltip, Legend, CategoryScale, LinearScale,BarElement,} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./LancChart.css";
import { getLanguageconfig, languageOptions } from "../../data/config/langData";
import { useRecoilState } from "recoil";
import { currentChartSize } from "../../data/config/atom";
import { motion, useInView, useAnimation } from "framer-motion";

const LanguageChart = () => {
    const configLang = getLanguageconfig();
    const optionsLang = languageOptions();
    const [chartSize, setChartSize] = useRecoilState(currentChartSize);
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

    const changeSize = (event) => {
        event.preventDefault();
        if (chartSize === "small") {
            setChartSize("large");
        } else {
            setChartSize("small");
        }
    };

    return (
        
        <section ref={ref} className="circle-container">
        <motion.div className="motion-div-circle"
            variants={{
                hidden: { opacity: 0, y: 255},
                visible: { opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: .25}}
        >
                <button className="change-size-btn" onClick={changeSize}>
                    Ändra storlek
                </button>
                <div className={chartSize}>
                    <Pie data={configLang} options={optionsLang} />
                </div>
        </motion.div>
            </section>
    );
};

export default LanguageChart;