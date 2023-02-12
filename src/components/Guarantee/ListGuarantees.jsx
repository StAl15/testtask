
import {ItemGuarantee} from "./ItemGuarantee";

export const ListGuarantees = ({guarantees}) => {
    return (
        <>
            {guarantees.map((guarantee, index) =>
                <ItemGuarantee key={index} guarantee={guarantee}/>
            )}
        </>
    );
};