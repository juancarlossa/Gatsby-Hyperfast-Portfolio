import React from "react"
import { FaCode, FaLaptop, FaLanguage } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "development",
    text: `I´m like a builder of the internet. As I´m constantly researching for new technologies, I can create and optimize your website in order to work as you want.`,
  },
  {
    id: 2,
    icon: <FaLaptop className="service-icon" />,
    title: "design",
    text: `A good appearance is even more important than a good code. That's why firstly I create lot of mockups, and then choose the best option so that the website looks incredible.`,
  },
  {
    id: 3,
    icon: <FaLanguage className="service-icon" />,
    title: "multilanguage",
    text: `My strongest point are languages. Living and studying abroad helped me to think in several languages at the same time, so it costs me no effort.`,
  },
]

export default services
