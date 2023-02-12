import {ItemGuarantee} from "../Guarantee/ItemGuarantee";
import {ItemLabel} from "./ItemLabel";
import styles from './ListLabelComponent.module.scss'
export const ListLabelsComponent = ({labels}) => {
    return (
        <div className={styles.content}>
            {labels.map((label, index) =>
                <ItemLabel key={index} label={label}/>
            )}
            {labels.map((label, index) =>
                <ItemLabel key={index} label={label}/>
            )}
            {labels.map((label, index) =>
                <ItemLabel key={index} label={label}/>
            )}
        </div>
    );
};