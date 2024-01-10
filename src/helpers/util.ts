import phone1 from '../images/works/phone1.webp'
import phone2 from '../images/works/phone2.webp'
import phone3 from '../images/works/phone3.webp'
import phone4 from '../images/works/phone4.webp'
import phone5 from '../images/works/phone5.webp'
import phone6 from '../images/works/phone6.webp'
import phone7 from '../images/works/phone7.webp'
import phone8 from '../images/works/phone8.webp'

interface serviceType {
    title: string,
    description: string,
    icon: string
}

interface imagesType {
    src:string,
    alt:string,
    description:string,
    modelo:string
}

export const services: serviceType[] = [
    {
        title: 'Quitar cuentas Google',
        description: 'Eliminamos de manera segura las cuentas Google de tus dispositivos, brindándote la libertad de acceder y disfrutar plenamente de tu dispositivo sin restricciones.',
        icon:'ri-mail-lock-line'
    },{
        title:'Cambio de Pantalla',
        description:'Experimenta una visión renovada con nuestro servicio de cambio de pantalla. Reparamos y reemplazamos pantallas con precisión, devolviéndole a tu dispositivo su nitidez y brillo originales.',
        icon:'ri-fullscreen-line'
    },
    {
        title:'Cambio de Centro de Carga',
        description:'Con nuestro servicio de cambio de centro de carga, garantizamos una conexión estable y segura.',
        icon:'ri-battery-line'
    },
    {
        title:'Cambio de Batería',
        description:'Renovamos la potencia y duración de tu batería, asegurándonos de que tu dispositivo funcione de manera óptima y esté listo para acompañarte durante todo el día.',
        icon:'ri-phone-camera-line'
    },
    {
        title:'Liberación',
        description:'Cambio de operador o para aprovechar funciones adicionales, nuestro proceso de liberación es seguro y eficiente.',
        icon:'ri-rotate-lock-line'
    },
    {
        title:'Quitar Cuentas Macropay',
        description:'Removemos cuentas de macropay de forma segura y eficiente.',
        icon:'ri-folder-user-line'
    }
]

export const imagesWork:imagesType[] = [
    {
        src:phone1.src,
        alt:'Telefono con una pantalla mostrando la hora',
        description:'revivió el celular poco X3 pro para recuperar la información del cliente',
        modelo:'Poco X3'
    },
    {
        src:phone2.src,
        alt:'Telefono con una pantalla reparada',
        modelo:'Sony Xperia XA Ultra ',
        description:'Cambió al centro de carga y un cambio de pantalla'
    },
    {
        src:phone3.src,
        alt:'Telefono Motorola con una pantalla en reparación',
        modelo:'Moto G8 play',
        description:'Surgio un cambió de pantalla '
    },
    {
        src:phone4.src,
        alt:'Telefono con una pantalla nueva cambiada',
        description:'Cambio de pantalla y centro de carga',
        modelo:'Moto G7 Power'
    },
    {
        src:phone5.src,
        alt:'Telefono de color negro mostrado su parte trasera',
        modelo:'Samsung j4 plus',
        description:'Se realizo cambio a la tapa trasera del equipo',
    },
    {
        src:phone6.src,
        alt:'Telefono negro mostrando su pantalla de bloqueo y con una notificación de desbloqueo de cuenta ',
        modelo:'Xiaomi',
        description:'Se removio cuenta xiomi y se quito cuenta google'
    },
    {
        src:phone7.src,
        alt:'Telefono negro con cambio la tapa trasera ',
        description:'Se cambio la tapa trasera de equipo',
        modelo:'Samsung J4 Plus'
    },
    {
        src:phone8.src,
        alt:'Telefono con una notificación de desbloqueo de equipos',
        description:'Se realizo un desbloqueo de equipo ',
        modelo:'Samsung'
    },
]