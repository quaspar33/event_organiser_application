import { motion } from "framer-motion";
import Backdrop from "./Backdrop.tsx";
import { Component } from "react";

interface ModalProps {
    text: string;
    handleClose: () => void;
}

interface ModalState {
    isClicked: boolean;
}

class Modal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props);
        this.state = {
            isClicked: false,
        };
    }

    handleOnClick = () => {
        this.setState((prevState) => ({
            isClicked: !prevState.isClicked,
        }));
        this.props.handleClose();
    };

    render() {
        const { text } = this.props;
        const dropIn = {
            hidden: {
                y: "-100vh",
                opacity: 0,
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 500,
                },
            },
            exit: {
                y: "100vh",
                opacity: 0,
            },
        };

        return (
            <Backdrop onClick={this.handleOnClick}>
                <motion.div
                    className="flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                >
                    <p>{text}</p>
                    <button onClick={this.handleOnClick}>Close</button>
                </motion.div>
            </Backdrop>
        );
    }
}

export default Modal;
