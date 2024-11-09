import { Header } from '@/components/header';
import { Breadcrumb } from '@/components/breadcrumb/style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';

export default function Donation() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        phone: '',
        jenisDonasi: '',
        lokasiTanam: '',
        jumlahItem: 0,
        jumlahPembayaran: 0,
    });

    const [snapToken, setSnapToken] = useState(null);

    const breadcrumbLinks = [
        { name: 'home', url: '/home' },
        { name: 'Donate Us', url: '/donation' },
    ];

    const donationOptions = [
        { value: 'pesanTanam', label: 'Pesan Tanam' },
        { value: 'pesanBibit', label: 'Pesan Bibit' },
        { value: 'pemeliharaanCarbon', label: 'Pemeliharaan Carbon' },
    ];

    const handleInputChange = (key, value) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_CLIENT_KEY);
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const handleWeb3Order = async () => {
        if (!window.ethereum) {
            alert('Web3 provider not found. Please install MetaMask.');
            return;
        }

        try {
            const web3 = new Web3(window.ethereum);
            const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
            const treeOrderABI = [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];
            const contract = new web3.eth.Contract(treeOrderABI, contractAddress);
            const accounts = await web3.eth.requestAccounts();

            await contract.methods.orderTrees(formData.jumlahItem).send({ from: accounts[0] });
            alert('Tree order successful!');
        } catch (error) {
            console.error('Web3 order error:', error);
        }
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://app.sandbox.midtrans.com/snap/v1/transactions', {
                transaction_details: { order_id: `order-${Date.now()}`, gross_amount: formData.jumlahPembayaran },
                customer_details: { first_name: formData.nama, email: formData.email, phone: formData.phone },
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY).toString('base64')}`,
                },
            });

            setSnapToken(response.data.token);
        } catch (error) {
            console.error('Midtrans error:', error);
        }
    };

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb title="Donate Us" links={breadcrumbLinks} />
            <main className="main-wrapper bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card card-order">
                                <div className="card-header">
                                    <h4 className="font-weight-bolder mb-0">Form Order</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmitForm}>
                                        <TextInput
                                            id="nama"
                                            label="Nama pemesan"
                                            placeholder="Nama pemesan"
                                            value={formData.nama}
                                            onChange={(value) => handleInputChange('nama', value)}
                                        />
                                        <TextInput
                                            id="email"
                                            label="Email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(value) => handleInputChange('email', value)}
                                            type="email"
                                        />
                                        <TextInput
                                            id="phone"
                                            label="Phone / Whatsapp"
                                            placeholder="Phone / Whatsapp"
                                            value={formData.phone}
                                            onChange={(value) => handleInputChange('phone', value)}
                                        />
                                        <SelectInput
                                            id="jenisDonasi"
                                            label="Jenis donasi"
                                            value={formData.jenisDonasi}
                                            onChange={(value) => handleInputChange('jenisDonasi', value)}
                                            options={donationOptions}
                                        />
                                        <TextInput
                                            id="lokasiTanam"
                                            label="Lokasi pesan tanam"
                                            placeholder="Lokasi pesan tanam"
                                            value={formData.lokasiTanam}
                                            onChange={(value) => handleInputChange('lokasiTanam', value)}
                                        />
                                        <TextInput
                                            id="jumlahItem"
                                            label="Jumlah bibit dipesan"
                                            placeholder="Jumlah bibit dipesan"
                                            value={formData.jumlahItem}
                                            onChange={(value) => handleInputChange('jumlahItem', parseInt(value))}
                                            type="number"
                                        />
                                        <button type="button" className="btn btn__main" onClick={handleWeb3Order}>
                                            Pesan Pohon (Web3)
                                        </button>
                                        {/* <button type="submit" className="btn btn__main mt-3">Pesan (Midtrans)</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
