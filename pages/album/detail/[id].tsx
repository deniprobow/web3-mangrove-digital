import { Header } from '@/components/header';
import { Loading } from '@/components/Loading';
import { Breadcrumb } from '@/components/breadcrumb/style';
import { CardGallery } from '@/components/CardGallery';
import { useRouter } from 'next/router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Fancybox from '@/components/Fancybox';
import React from 'react';

export default function DetailAlbum() {
    const router = useRouter();

    type MetaType = {
        text: string;
    };

    type DataType = {
        link: string;
        img: string;
        title: string;
        metas: MetaType[];
    };

    const breakPoints: { [key: number]: number } = {
        575: 1,
        768: 2,
        992: 3,
    };

    const breadcrumbLinks = [
        {
            name: 'Home',
            url: '/home',
        },
        {
            name: 'Album Documentation',
            url: '/album',
        },
        {
            name: 'Photo of Album',
            url: `/album/detail/${router.query.id}`,
        },
    ];

    const datas: DataType[] = [
        {
            link: '/img/album/album-cover-1.webp',
            img: '/img/album/album-cover-1.webp',
            title: 'Photo 1',
            metas: [{ text: 'August 31, 2023' }],
        },
        {
            link: '/img/album/album-cover-2.webp',
            img: '/img/album/album-cover-2.webp',
            title: 'Photo 2',
            metas: [{ text: 'August 31, 2023' }],
        },
        {
            link: '/img/album/album-cover-3.webp',
            img: '/img/album/album-cover-3.webp',
            title: 'Photo 3',
            metas: [{ text: 'August 31, 2023' }],
        },
    ];

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb title="Photo of Album" links={breadcrumbLinks} />
            {/* <main className="main-wrapper">
                <div className="container">
                    <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
                        <Fancybox>
                            <Masonry gutter="24px">
                                {datas.map((data: DataType, index: number) => (
                                    <CardGallery
                                        key={index}
                                        link={data.link}
                                        img={data.img}
                                        title={data.title}
                                        metas={data.metas}
                                    />
                                )) as React.ReactNode[]}
                            </Masonry>
                        </Fancybox>
                    </ResponsiveMasonry>
                </div>
            </main> */}
        </>
    );
}
