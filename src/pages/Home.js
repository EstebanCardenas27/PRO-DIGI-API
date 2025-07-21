import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "preact/jsx-runtime";
import { useState, useEffect, useRef } from "preact/hooks";
import { Filter } from "@components/Filter/Filter";
import { InputSearch } from "@components/Inputs/InputSearch";
import { CardDigimon } from "@components/Card/CardDigimon";
import { CardRotating } from "@components/Card/CardRotating";
import { Cards } from "@assets/Icons/Card";
import { getRandom } from "@utils/getRandom";
import { getDigimon, getList } from "@services/digimonApi";
import { attributes } from "@constants/attributes";
import { level } from "@constants/levels";
export const Home = () => {
    const [list, setList] = useState([]);
    const [digimon, setDigimon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const card = useRef(null);
    const handleSearch = async (search = "") => {
        if (!search.trim())
            return;
        setLoading(true);
        try {
            const result = await getList({
                name: search.trim(),
                page: 0,
            });
            setList(result?.content ?? []);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    };
    const handleOnClick = async (id = "") => {
        try {
            const result = await getDigimon(id);
            setDigimon(result);
            setIsVisible(true);
        }
        catch (e) {
            console.error(e);
        }
    };
    const handleOnRefresh = () => {
        getListDigimon();
    };
    const getListDigimon = async (props = {}) => {
        setLoading(true);
        const list = await getList(props);
        setList(list?.content);
        setLoading(false);
    };
    const handleClickOutside = (event) => {
        if (card.current && !card.current.contains(event.target)) {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        getListDigimon();
        handleOnClick(Math.floor(getRandom(1, 1488)).toString());
    }, []);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-full flex flex-col gap-4", children: [_jsx("section", { className: "relative w-full md:pt-30 pt-24 text-white text-center px-6", children: _jsxs("div", { className: "flex flex-wrap w-full gap-4", children: [_jsx(InputSearch, { onChange: handleSearch, classNameContent: "w-[calc(100%-3.5rem)]" }), _jsx("button", { onClick: handleOnRefresh, 
                                    // className="cursor-pointer w-[1.85rem] h-[1.85rem] md:w-10 md:h-10 flex justify-center items-center text-lg text-bold bg-gradient-to-r from-teal-300 via-gray-600 to-teal-800 text-white rounded-full transition"
                                    className: "cursor-pointer w-[1.85rem] h-[1.85rem] md:w-10 md:h-10 flex justify-center items-center text-lg text-bold bg-gradient-to-r backdrop-blur-lg text-white rounded-full transition border hover:text-teal-400", children: _jsx(Cards, {}) }), _jsx(Filter, { handleGetList: getListDigimon, attributes: attributes, level: level })] }) }), _jsx("section", { className: "flex flex-1 overflow-hidden", children: loading ? (_jsx("div", { className: "flex justify-center items-center w-full h-full", children: _jsx("img", { src: `${import.meta.env.BASE_URL}Digimons/loading.gif`, alt: "loading", class: "w-50" }) })) : (_jsx(CardRotating, { list: list, onClick: handleOnClick })) })] }), _jsx("section", { className: `${!isVisible ? "hidden" : ""} md:block absolute lg:relative z-10 md:w-1/2 w-full p-4 py-28 flex flex-wrap justify-center items-center bg-black/50 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none rounded-lg h-full`, children: _jsx("div", { ref: card, children: _jsx(CardDigimon, { ...digimon, id: digimon?.id ?? 0, name: digimon?.name ?? "---", image: digimon?.images?.[0]?.href }) }) })] }));
};
