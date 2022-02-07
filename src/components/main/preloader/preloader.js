import s from './preloader.module.scss';

const Preloader = () => {

    return (
        <>
            <div className={s.wrap}>
                <div className={s.loader}>
                    Loading...
                </div>
            </div>
        </>
    );
}

export default Preloader;