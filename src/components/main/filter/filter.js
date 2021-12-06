import s from './filter.module.css';

const Filter = () => {

    return (
        <>
            <div className={s.wrap}>
                <div className={s.filter}>
                    <p>gender</p>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Genderless</option>
                    </select>
                </div>
                <div className={s.filter}>
                    <p>species</p>
                    <select>
                        <option>Human</option>
                        <option>Alien</option>
                        <option>Poopybutthole</option>
                    </select>
                </div>
                <div className={s.filter}>
                    <p>location</p>
                    <select>
                        <option>Earth (Replacement Dimension)</option>
                        <option>Пункт 2</option>
                    </select>
                </div>
                </div>

        </>
    );
}

export default Filter;