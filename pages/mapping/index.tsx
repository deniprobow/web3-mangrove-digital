import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from "@/components/breadcrumb/style"

export default function Mapping() {
    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Mapping',
            url : '/mapping'
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb
                title = "Mapping"
                links = {breadcrumbLinks}
            />
            <div className="map-google">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.529806852664!2d109.36383093005371!3d-0.058708350541439414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1693154364266!5m2!1sen!2sid" width="100%" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </>
    )
}