import styles from './about.module.css';

const AboutUs = () => {
    return (
        <div className={styles.containerAboutUs}>
            <div className={styles.AboutUsTitle}>
                <h3>Tentang kami</h3>
                <h2>Rahayu Abadi</h2>
                <div className={styles.AboutUsDescription}>
                    <p>Menjadi perusahaan yang unggul, terpercaya, tumbuh dan berkembang.</p>
                    <p>Seluruh karyawan bertanggung jawab atas fungsi dan perang masing-masing.</p>
                    <p>Berusaha memberikan layanan terbaik kepada stakeholder.</p>
                </div>
            </div>
            <div className={styles.AboutUsBody}>
                <div className={styles.leftContent}>
                    <img src="/assets/img/office.svg" />
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.rightContentFeatured}>
                        <img src="/assets/icon/bebas_residu.svg" />
                        <div className={styles.description}>
                            <h3>Bebas Residu Antibiotik</h3>
                            <p>Produk kami memiliki kualitas daging ayam yang lebih baik karena ayam yang digunakan dalam produksinya dijaga dari infeksi dan penyakit yang memerlukan penggunaan antibiotik</p>
                        </div>
                    </div>
                    <div className={styles.rightContentFeatured}>
                        <img src="/assets/icon/rendah_lemak.svg" />
                        <div className={styles.description}>
                            <h3>Rendah Lemak</h3>
                            <p>Daging ayam yang kami kelola memiliki kadar lemak yang rendah sehingga lebih sehat untuk jantung dan sistem kardiovaskular, serta dapat membantu menjaga berat badan ideal
                            </p>
                        </div>
                    </div>
                    <div className={styles.rightContentFeatured}>
                        <img src="/assets/icon/rendah_kolesterol.svg" />
                        <div className={styles.description}>
                            <h3>Rendah Kolesterol</h3>
                            <p>Kami berkomitmen untuk menjaga kualitas daging ayam agar rendah kolesterol agar sehat untuk jantung dan sistem kardiovaskular, serta dapat membantu menurunkan risiko penyakit jantung dan strok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
