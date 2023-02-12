import vk from "../assets/icons/UI kit/Icon/State=VK.svg";
import insta from "../assets/icons/UI kit/Icon/State=instagram.svg";
import twitter from "../assets/icons/UI kit/Icon/State=twitter.svg";
import youtube from "../assets/icons/UI kit/Icon/State=youtube.svg";
import i1 from '../assets/images/image.svg';
import i2 from '../assets/images/image-1.svg';
import i3 from '../assets/images/image-2.svg';

function ex(array) {
    let r = []
    for (var i of array) {
        r.push({label: i})
    }
    return r
}

var st = '../../assets/images/'
var im1 = st+'image.svg'
var im2 = st+'image-1.svg'
var im3 = st+'image-2.svg'

export const mainImgs = ex([i1, i2, i3])
export const headers = ex(['О компании', 'Гарантии', 'Новости', 'Акции', 'Контакты'])
export const socialIcons = ex([vk, insta, twitter, youtube])
export const footerTypes = ex(['Автосервис Volvo', 'Автосервис Land Rover', 'Автосервис Vag', 'Автосервис BMW', 'Автосервис Mercedes', "Кузовный ремонт и детейлинг"])
export const footerServices = ex(['Ремонт автомобиля', 'Плановое ТО', "Диагностика", "Кузовной ремонт и детейлинг", "Чип тюнинг"])