import 'assets/scss/homeStyles.scss';

function Home() {
    return (
        <div className='headerHomeContent__main-wrapper'>
            <div className='headerHomeContent__titleContent'>
                <h1 className='headerHomeContent__title'>Titulo Principal</h1>
                <p className='headerHomeContent__subTitle'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <a href='/contact' className='btn btn-primary headerHomeContent__btn'>Free Estimate</a>
            </div>
            <div className='headerHomeContent__overlayImg'></div>
        </div>
    )
}

export default Home
