import styles from './index.module.scss'

export const ButtonComponent = ({label, icon, showIcon = true, showLabel = true, type='button'}) => {

    return (
        <>
            <button type={type} className={styles.btnComponent}>
                {showLabel
                    ?
                    <span>{label}</span>
                    :
                    <span style={{display: 'none'}}>{label}</span>
                }
                {showIcon
                    ?
                    <img src={icon}/>
                    :
                    <img style={{display: 'none'}} src={icon}/>
                }
            </button>
        </>
    );
};