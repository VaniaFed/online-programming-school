export const entriesToTable = (inputEntries: any[]) => {
    console.log(inputEntries);
    const result = inputEntries.map((essence: any) => {
        const entries = Object.entries(essence);
        return {
            cells: [
                ...entries.map(entry => ({
                    text: entry[1]
                }))
            ]
        };
    });

    return result;
};
