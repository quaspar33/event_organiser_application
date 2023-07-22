import { motion } from 'framer-motion';
import {Component, useState} from "react";

class Backdrop extends Component<{ children: any, onClick: any }> {
    render() {
        let {children, onClick} = this.props;
        const [isClicked, setIsClicked] = useState(false);

        const handleOnClick = () => {
            setIsClicked(!isClicked);
            onClick();
        };

        return (
            <motion.div
                className="flex items-center justify-center h-full w-full bg-black"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: isClicked ? 0.7 : 0,
                    pointerEvents: isClicked ? "auto" : "none",
                    zIndex: isClicked ? 10 : -1
                }}
                onClick={handleOnClick}
            >
                {children}
            </motion.div>
        );
    }
}

export default Backdrop;
