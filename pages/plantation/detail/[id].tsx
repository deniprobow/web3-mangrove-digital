import { Header } from '@/components/header';
import { Breadcrumb } from '@/components/breadcrumb/style';
import { FormatNumber } from '@/modules/utils/formatNumber';
import { FormatDate } from '@/modules/utils/formatDate';

type DataPesanTanam = {
    id_pesan_tanam: string;
    nama_pemesan: string;
    jumlah_tanam: number;
    waktu_penanaman: string;
    lokasi_penanaman: string;
};

type Timeline = {
    tgl_timeline_pesan_tanam: string;
    foto_timeline_pesan_tanam: string;
    keterangan_timeline_pesan_tanam: string;
};

type DataProps = {
    dataPesanTanam: DataPesanTanam;
    dataTimeline: Timeline[];
};

export const getServerSideProps = async (context: { params: { id: string } }) => {
    const { id } = context.params;

    try {
        const resDataPesanTanam = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/orders/${id}`);
        const resTimeline = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/timelines/?idpt=${id}`);

        if (!resDataPesanTanam.ok || !resTimeline.ok) {
            throw new Error('Failed to fetch data');
        }

        const dataPesanTanam: DataPesanTanam = await resDataPesanTanam.json();
        const dataTimeline: Timeline[] = await resTimeline.json();

        return {
            props: {
                dataPesanTanam,
                dataTimeline,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true, // Return a 404 page if data fetching fails
        };
    }
};

export default function DetailPlantation({ dataPesanTanam, dataTimeline }: DataProps) {
    const breadcrumbLinks = [
        {
            name: 'Home',
            url: '/home',
        },
        {
            name: 'Plantation',
            url: '/plantation',
        },
        {
            name: dataPesanTanam.nama_pemesan,
            url: '/plantation/detail/' + dataPesanTanam.id_pesan_tanam,
        },
    ];

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb title="Detail Plantation" links={breadcrumbLinks} />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 plantation-detail mb-5 mb-lg-0">
                            <div className="plantation-detail--inner">
                                <h1 className="plantation-detail--title">{dataPesanTanam.nama_pemesan}</h1>
                                <ul className="plantation-detail--meta">
                                    <li><strong>Jumlah Bibit :</strong> {FormatNumber(dataPesanTanam.jumlah_tanam)}</li>
                                    <li><strong>Waktu Penanaman: </strong> {dataPesanTanam.waktu_penanaman}</li>
                                    <li><strong>Alamat Penanaman :</strong> {dataPesanTanam.lokasi_penanaman}</li>
                                </ul>
                                <div className="map-google">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.529806852664!2d109.36383093005371!3d-0.058708350541439414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1693154364266!5m2!1sen!2sid"
                                        width="100%"
                                        height="500"
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <h3 className="mb-4">Progress Penanaman Bibit</h3>
                            <ul className="timeline-progress">
                                {dataTimeline.map((item: Timeline, index: number) => (
                                    <li key={index}>
                                        <span className ="label label__main progress--date">{FormatDate(item.tgl_timeline_pesan_tanam)}</span>
                                        <img src={item.foto_timeline_pesan_tanam} alt="" />
                                        <p>{item.keterangan_timeline_pesan_tanam}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}