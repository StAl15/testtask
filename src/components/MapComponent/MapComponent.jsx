import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import styles from './MapComponent.module.scss'
import pin from '../../assets/icons/UI kit/Icon/State=pin.svg'

export const MapComponent = () => {
    return (
        <div className={styles.content}>
            <YMaps>
                <Map
                    className={styles.mapComp}
                    defaultOptions={{
                        autoFitToViewport: 'always'
                    }}
                    width={'auto'}
                    height={'auto'}
                    modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                    defaultState={{center: [56.815690, 60.524639], zoom: 12}}>
                    <Placemark
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: pin,
                            iconImageSize: [64, 64],
                        }}
                        geometry={[56.815690, 60.524639]}/>
                    <ZoomControl/>

                </Map>
            </YMaps>
        </div>

    )

};