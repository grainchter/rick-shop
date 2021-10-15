import s from './catalog.module.css';


const Catalog = () => {

    return (
    <>
            <div className={s.app}>

              <div className={s.block}>
                <a><img></img></a>
                <div className={s.description}>
                  <p>fff</p>
                  <p>fff</p>
                  <p>ffff</p>
                  <p>fff</p>
                </div>
                <div className={s.price}>
                  <p>${Math.floor((Math.random() * 10000) + 1)}</p>
                  <input type="button" value="Buy" />
                </div>
              </div>
            </div>
    </>
    );
}

export default Catalog;