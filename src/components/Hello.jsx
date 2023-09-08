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

        <div style={flyingTextStyle} className="wrapper">
            <img className="top helloImage" src="/logo.png" alt="kuzey tekel logo" />

            <div className="typing-demo">
                Kuzey Tekel
            </div>
            <p className="text">Aradığın tüm tekel ürünleri...</p>
            <img className="bottom helloImage" src="/loading.png" alt="kuzey tekel logo" />

        </div>
    )
}
