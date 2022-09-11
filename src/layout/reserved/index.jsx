import React from 'react'
import Profile from 'assets/img/profile/profile.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Input } from 'components'

const Reserved = () => {

    const router = useRouter()

    return (
        <div className='w-full flex flex-col justify-start gap-4'>
            <p className='w-full bg-white p-2 font-extrabold text-primary-200 text-3xl rounded-lg'>
                Reservasi Tutor
            </p>
            <div className='w-full flex flex-col gap-4 justify-start items-center bg-white rounded-lg p-4'>
                <div className='w-full h-full flex flex-col md:flex-row justify-start gap-4 items-start'>
                    <div className='lg:w-6/12 w-full flex flex-col gap-2'>
                        <Input
                            type='text'
                            name='name'
                            label='Nama Pemesanan'
                            placeholder='Masukkan Nama Pemesanan'
                            value={''}
                            onChange={() => { }}
                        />
                        <Input
                            type='text'
                            name='alamat'
                            label='Alamat Lengkap'
                            placeholder='Masukkan Alamat Lengkap'
                            value={''}
                            onChange={() => { }}
                        />
                        <Input
                            type='number'
                            name='phoneNumber'
                            label='No Hp'
                            placeholder='Masukkan No Hp'
                            value={''}
                            onChange={() => { }}
                        />
                        <div className='hidden w-full md:flex flex-col gap-2 justify-start items-start mt-4'>
                            <p className='text-sm font-semibold text-gray-800'>Total Biaya</p>
                            <p className='text-2xl font-extrabold text-primary-200'>Rp. 100.000</p>
                        </div>
                    </div>
                    <div className='lg:w-6/12 w-full flex flex-col gap-2'>
                        <Input
                            type='text'
                            name='pelajaran'
                            label='Mata Pelajaran'
                            placeholder='Masukkan Mata Pelajaran'
                            value={''}
                            onChange={() => { }}
                        />
                        <Input
                            type='text'
                            name='tingkat'
                            label='Tingkat'
                            placeholder='Masukkan Tingkat Sekolah'
                            value={''}
                            onChange={() => { }}
                        />
                        <Input
                            type='text'
                            name='jumlahSesi'
                            label='Jumlah Pertemuan'
                            placeholder='Masukkan Jumlah Pertemuan'
                            value={''}
                            onChange={() => { }}
                        />
                        <Input
                            type='text'
                            name='jadwal'
                            label='Jadwal Pertemuan'
                            placeholder='Masukkan Jadwal Pertemuan'
                            value={''}
                            onChange={() => { }}
                        />
                        <div className='lg:hidden w-full flex flex-col gap-2 justify-start items-start mt-4'>
                            <p className='text-sm font-semibold text-gray-800'>Total Biaya</p>
                            <p className='text-2xl font-extrabold text-primary-200'>Rp. 100.000</p>
                        </div>
                    </div>
                </div>
                <button className='w-full p-2 bg-primary-200 text-white rounded-lg hover:shadow-xl'>
                    Booking Reservasi
                </button>
            </div>
        </div>
    )
}

export default Reserved