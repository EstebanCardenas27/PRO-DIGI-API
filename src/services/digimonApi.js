import { axios } from "@utils/axios";
import { getRandom } from "@utils/getRandom";
export const getList = async (props) => {
    const params = {
        "pageSize": "8",
        ...props
    };
    const parametersFirst = new URLSearchParams(params).toString();
    const responseFirst = await axios({ url: `/digimon?${parametersFirst}` });
    const pagesTotal = Math.floor(getRandom(1, responseFirst.pageable.totalPages)).toString();
    params["page"] = pagesTotal;
    const parameters = new URLSearchParams(params).toString();
    const response = await axios({ url: `/digimon?${parameters}` });
    return response;
};
export const getDigimon = async (idOrName) => {
    const url = `/digimon/${idOrName}`;
    const response = await axios({ url });
    return response;
};
