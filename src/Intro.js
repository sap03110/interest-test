import title from './img/title-img.png';
import start from './img/start-btn.png';

const Intro = () => {
    return (
        <div>
            <div id="intro" className="intro">
                <img src={title} className="title-img" alt="제목 이미지" />
                {
                    /* <Link className="btn start" to="/main">시작하기</Link> */
                }
                <img src={start} className="start-btn" alt="시작 버튼" onClick={
                    () => {
                        document.getElementById('intro').classList.add("disappear")
                        document.location.href = "/#/main"
                    }
                } />
            </div>
        </div>
    );
}

export default Intro;