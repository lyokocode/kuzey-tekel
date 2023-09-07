import "../styles/hello.scss"
export const Hello = () => {

    const flyingTextStyle = {
        position: "absolute",
        top: "50%", // Yatay hizalama için gereken stil
        left: "50%", // Dikey hizalama için gereken stil
        transform: "translate(-50%, -50%)", // Yatay ve dikey merkezleme
        fontSize: "36px",
        animation: "flyIn 2s ease-in-out", // Uçma animasyonu
    };

    return (
        <div style={flyingTextStyle} className='hello '>
            <img className="top" src="/logo.png" alt="kuzey tekel logo" />
            <h1 className="title">Kuzey Tekel</h1>
            <p className="text">Aradığın tüm tekel ürünleri</p>
            <img className="bottom" src="/loading.png" alt="kuzey tekel logo" />
        </div>
    )
}
