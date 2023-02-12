import styles from './App.module.scss';
import {MainSlider} from "./elements/MainSlider";
import {MainAdvantage} from "./elements/MainAdvantage";
import {ListServices} from "./elements/ListServices";
import {Guaranties} from "./elements/Guaranties";
import {ListLabels} from "./elements/ListLabels";
import {ActionsSlider} from "./elements/ActionsSlider";
import {ListReviews} from "./elements/ListReviews";
import {FindUs} from "./elements/FindUs";
import {FeedbackScreen} from "./elements/FeedbackScreen";
import {DownloadApp} from "./elements/DownloadApp";
import {Navbar} from "./elements/Navbar";
import {Footer} from "./elements/Footer";

function App() {
    return (
        <div className={styles.App}>
            <Navbar/>
            <MainSlider/>
            <MainAdvantage/>
            <ListServices/>
            <Guaranties/>
            <ListLabels/>
            <ActionsSlider/>
            <ListReviews/>
            <FindUs/>
            <FeedbackScreen/>
            <DownloadApp/>
            <Footer/>
        </div>
    );
}

export default App;
