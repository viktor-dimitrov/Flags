
export const useRandomSelector = (list, count ) => {

    const selectRandomCountries = (list, count) => {
        const selected = [];
        const countryIndices = [];
        let i = 0;
        while (i < count && i < list.length) {
            const randomIndex = Math.floor(Math.random() * list.length);
            if (!countryIndices.includes(randomIndex)) {
                countryIndices.push(randomIndex);
                selected.push(list[randomIndex]);
                i++;
            }
        }
        return selected;
    }


    return {
        selectRandomCountries
    }


}