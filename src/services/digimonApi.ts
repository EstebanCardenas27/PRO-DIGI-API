import { axios } from "@utils/axios";
import { getRandom } from "@utils/getRandom";

export const getList = async (props? : any) => {
    const params = {
        "pageSize": "8",
        "page": Math.floor(getRandom(1, 61)).toString(),
        ...props
    };
    const parameters = new URLSearchParams(params).toString();
    const url = `/digimon?${parameters}`;
    const response = await axios({ url });
    return response;
};

export const getDigimon = async (idOrName : string) => {
    const url = `/digimon/${idOrName}`;
    const response = await axios({ url });
    return response;
};

export const getTypes = async () => {
  const url = `/type`;
  const response = await axios({ url });
  return response;
};

export const getFields = async () => {
  const url = `/field`;
  const response = await axios({ url });
  return response;
};

export const getAttributes = async () => {
  const url = `/attribute`;
  const response = await axios({ url });
  return response;
};