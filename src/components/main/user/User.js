import s from './user.module.css';

const UserPage = () => {

  return (
    <>
      <div className={s.container}>
        <div className="userImg">
          <img src="#"></img>
        </div>
        <div className="userInfo">
          <h1>Name</h1>
          <p>address</p>
        </div>
        <div>
          <a>Заказы</a>
          <a>Сохраненное</a>
        </div>
      </div>

    </>
  );
}

export default UserPage;