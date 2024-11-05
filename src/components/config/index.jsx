import DevWarning from "../development/index.jsx";
import Homepage from "../homepage/index.jsx";

const development_mode = false

const Config = () => {
    if (development_mode) {
        return (
            <DevWarning />
        )
    }

    return (
        <Homepage />
    )
}

export default Config;