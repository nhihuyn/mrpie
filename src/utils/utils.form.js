import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle,faCircleCheck,faTimesCircle} from "@fortawesome/free-regular-svg-icons"


const getClassName = (status) => {
    let defaultClass = "check";
    switch (status) {
        case "valid":
            return defaultClass + " correct";
        case "invalid":
            return defaultClass + " wrong";
        default:
            return defaultClass;
    }
};

const getIcon = (status) => {
    switch (status) {
        case "valid":
            return <FontAwesomeIcon icon={faCircleCheck}/>;
        case "invalid":
            return <FontAwesomeIcon icon={faTimesCircle}/>;
        default:
            return <FontAwesomeIcon icon={faCircle}/>
    }
};

export {getClassName,getIcon};