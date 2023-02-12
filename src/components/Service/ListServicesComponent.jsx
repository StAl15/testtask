import {ItemService} from "./ItemService";

export const ListServicesComponent = ({services}) => {
    return (
        <>
            {services.map((service, index) =>
                <ItemService key={service.id} number={index + 1} service={service}/>
            )}
        </>
    );
};