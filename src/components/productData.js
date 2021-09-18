import asus from '../images/asus.webp';
import hp from '../images/hp.webp';
import lenovo from '../images/lenovo.webp';
import motorola from '../images/motorola.webp';
import oneplus from '../images/oneplus.webp';
import bosch from '../images/bosch.webp';
import samsungImuri from '../images/samsun-imuri.webp';
import toothbrush from '../images/toothbrush.webp';
import dishMachine from '../images/dishmechine.webp';
import lgTv from '../images/lgTv.webp';
import samsungTv from '../images/samsungTv.webp';
import xbox from '../images/xbox.webp';

export const productData = [
    {
        id: 355377,
        title: `Xbox Series X Halo Infinite Limited Edition 1 TB`,
        img: xbox,
        star: 95,
        stock: 25,
        hasDiscount: true,
        normalPrice: 769,
        discountPrice: 569.99,
        energyClass: '',
        feature1: 'Runsaasti tehoa 4K-pelaamiseen',
        feature2: '4K Blu-ray-asema, HDR',
        feature3: '1 TB sisäinen muisti',
        discountValid: '15.11'
    },
    {
        id: 147833,
        title: `Asus VG279QM 27" pelinäyttö (musta)`,
        img: asus,
        star: 80,
        stock: 100,
        hasDiscount: true,
        normalPrice: 618,
        discountPrice: 349,
        energyClass: '',
        feature1: 'Full HD 1080p IPS -näyttö, 280 Hz',
        feature2: '1 ms, Nvidia G-Sync',
        feature3: 'HDMI, DisplayPort, 3,5 mm ääniliitäntä',
        discountValid: '19.9'
    },
    {
        id: 350786,
        title: `HP Laptop 15s-eq107no 15,6" kannattava R5/8256GB`,
        img: hp,
        star: "0",
        stock: 25,
        hasDiscount: true,
        normalPrice: 649,
        discountPrice: 499,
        energyClass: '',
        feature1: 'AMD Ryzen™ 5 4500U -prosessori',
        feature2: '15,6" Full HD SVA -näyttö',
        feature3: '8 GB DDR4 RAM, 256 GB SSD-muisti',
        discountValid: '19.9'
    },
    {
        id: 183672,
        title: `Lenovo IdeaPad Gaming 3 000VMX 15,6" pelikannettava`,
        img: lenovo,
        star: 80,
        stock: 25,
        hasDiscount: true,
        normalPrice: 799,
        discountPrice: 599,
        energyClass: '',
        feature1: 'AMD Ryzen™ 5 4600H -prosessori',
        feature2: 'Nvidia GTX 1650, 4GB',
        feature3: '8GB DDR4 RAM, 256GB NVMe tallennustila',
        discountValid: '19.9'
    },
    {
        id: 278829,
        title: `Motorola Moto G30 älypuhelin 4/128GB (Dark Pearl)`,
        img: motorola,
        star: 80,
        stock: 100,
        hasDiscount: true,
        normalPrice: 199,
        discountPrice: 111,
        energyClass: '',
        feature1: '6,5" 90 Hz Ultrawide HD+ -kosketusnäyttö',
        feature2: '64+8+2+2Mpx neloiskamera',
        feature3: '5 000 mAh akku, IP52-luokitus',
        discountValid: '19.9'
    },
    {
        id: 324884,
        title: `OnePlus Nord CE 5G älypuhelin 8/128GB(hiili)`,
        img: oneplus,
        star: 95,
        stock: 100,
        hasDiscount: true,
        normalPrice: 329,
        discountPrice: 279,
        energyClass: '',
        feature1: '6,43” 90 Hz AMOLED -kosketusnäyttö',
        feature2: '64+8+2 Mpx AI -kolmoiskamera',
        feature3: 'Snapdragon 750G -prosessori 5G-tuella',
        discountValid: '19.9'
    },
    {
        id: 206074,
        title: `Bosch Series 6 pyykinpesukone WAU28TE9SN (valkoinen)`,
        img: bosch,
        star: 95,
        stock: 100,
        hasDiscount: true,
        normalPrice: 729,
        discountPrice: 399,
        energyClass: '',
        feature1: 'Täyttömäärä: 9 kg',
        feature2: '1400 rpm, EcoSilence Drive',
        feature3: 'LED-näyttö, SpeedPerfect-toiminto',
        discountValid: '19.9'
    },
    {
        id: 206074,
        title: `Samsung Jet 60 Turbo johdoton varsi-imuri VS15A6031R1`,
        img: samsungImuri,
        star: 60,
        stock: 100,
        hasDiscount: true,
        normalPrice: 399,
        discountPrice: 279,
        energyClass: '',
        feature1: '150 W imuteho',
        feature2: 'Jopa 40 minuutin käyttöaika',
        feature3: 'Monikerroksinen suodatusjärjestelmä',
        discountValid: '30.9'
    },
    {
        id: 47913,
        title: `Oral-B Genius X sähköhammasharja 20200S (ruusukulta)`,
        img: toothbrush,
        star: 95,
        stock: 100,
        hasDiscount: true,
        normalPrice: 179,
        discountPrice: 111,
        energyClass: '',
        feature1: '3D-tekniikka, 6 harjaustilaa',
        feature2: 'Akunkesto: 56 min',
        feature3: 'Tekoälyopas, 360 SmartRing',
        discountValid: '19.9'
    },
    {
        id: 206065,
        title: `Siemens iQ300 astianpesukone SN43HW33VS (valkoinen)`,
        img: dishMachine,
        star: 95,
        stock: 5,
        hasDiscount: true,
        normalPrice: 699,
        discountPrice: 399,
        energyClass: '',
        feature1: 'Leveys: 60 cm, työtason alle sijoitettava',
        feature2: '13 hengen astioille, 6 ohjelmaa',
        feature3: 'Home Connect, iQdrive',
        discountValid: '19.9'
    },
    {
        id: 3000087,
        title: `LG 55" A1 4K OLED älytelevisio (2021)`,
        img: lgTv,
        star: 95,
        stock: 100,
        hasDiscount: true,
        normalPrice: 899,
        discountPrice: 699,
        energyClass: '',
        feature1: '55" Self-lit OLED Smart TV',
        feature2: 'α7 Gen4 AI Processor 4K, Active HDR',
        feature3: 'WebOS, ThinQ AI, ääniohjaus',
        discountValid: '19.9'
    },
    {
        id: 293519,
        title: `Samsung 58   AU7175 4K LED älytelevisio (2021)`,
        img: samsungTv,
        star: 95,
        stock: 25,
        hasDiscount: true,
        normalPrice: 799,
        discountPrice: 479,
        energyClass: '',
        feature1: '58" 4K UHD -älytelevisio, UHD Dimming',
        feature2: 'Processor 4K, PurColor',
        feature3: 'Tizen',
        discountValid: '19.9'
    },
    
    

]