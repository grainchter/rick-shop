class GetPages {

    async getPage() {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const arrInfo = await Object.values(data.info);
        const pages = await arrInfo[1];

        return pages;
    }

    async getCharacters() {
        let pages = null;
        let aliveArr = [];
        let intermArr = [];
        let finalArr = [];


        try {
            pages = await this.getPage();
        } catch (e) {
            console.log('error');
            console.log(e);
        }

        for (let i = 1; i <= pages; i++) {
            const response = await fetch('https://rickandmortyapi.com/api/character' + '?page=' + i);
            const data = await response.json();
            const array = await data.results;
            for (let j = 0; j <= array.length-1; j++) {
                if (array[j].status === 'Alive') {
                    aliveArr.push(array[j]);

                }
            }

        }

        finalArr = aliveArr.flat(1);
        console.log(finalArr);


    }


}

const FirebaseClass = new GetPages();

export default FirebaseClass;

