
import styles from "./Qrcode.module.css";


export function Qrcode() {
    return <div className={styles.panel}>

        <img className={styles.img} src="/image-qr-code.png" />

        <h1 className={styles.title}>Improve your front-end skills by building projects</h1>

        <p className={styles.text}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</p>
    </div>;
}