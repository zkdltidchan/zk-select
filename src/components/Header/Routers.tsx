import { 
    FaTshirt,
    FaSuitcase,
    FaFemale,
    FaMale,
    FaBlender,
    FaRegHandPeace,
    FaShoePrints,
    FaWallet,
    FaClock,
    FaHatCowboy,
    FaChair,
    FaMugHot,
    FaDumbbell,
    FaWineBottle,
    FaMusic,
    FaSwimmer,
    FaBaby,
    FaEllipsisH,
} from 'react-icons/fa';
import keys from '../../i18n/keys';

interface ItemProps {
    id: number;
    label: string;
    path: string;
    icon: JSX.Element;
    subMenu?: ItemProps[];
  }

const menProductItems = () => { 
  return [
    { id: 1, label: keys.header.products.menTops, path: "/category/shirt", icon: <FaTshirt /> },
    { id: 2, label: keys.header.products.menSuits, path: "/category/suit", icon: <FaSuitcase /> },
    { id: 3, label: keys.header.products.jacket, path: "/category/jacket", icon: <FaBlender /> },
    { id: 4, label: keys.header.products.blouson, path: "/category/blouson", icon: <FaRegHandPeace /> },
    { id: 5, label: keys.header.products.coat, path: "/category/coat", icon: <FaRegHandPeace /> },
    { id: 6, label: keys.header.products.pants, path: "/category/pants", icon: <FaMale /> },
    { id: 7, label: keys.header.products.shirt, path: "/category/shirt", icon: <FaTshirt /> },
    { id: 8, label: keys.header.products.tshirt, path: "/category/t-shirt", icon: <FaTshirt /> },
    { id: 9, label: keys.header.products.tops, path: "/category/tops", icon: <FaTshirt /> },
    { id: 10, label: keys.header.products.suit, path: "/category/suit", icon: <FaSuitcase /> },
    { id: 11, label: keys.header.products.bag, path: "/category/bag", icon: <FaSuitcase /> },
    { id: 12, label: keys.header.products.shoes, path: "/category/shoes", icon: <FaShoePrints /> },
    { id: 13, label: keys.header.products.wallet, path: "/category/wallet", icon: <FaWallet /> },
    { id: 14, label: keys.header.products.watch, path: "/category/watch", icon: <FaClock /> },
  ] as ItemProps[];
};

const womenProductItems = () => {
  return [
    { id: 1, label: keys.header.products.womenTops, path: "/category/shirt", icon: <FaFemale /> },
    { id: 2, label: keys.header.products.womenDresses, path: "/category/dress", icon: <FaFemale /> },
    { id: 3, label: keys.header.products.womenPants, path: "/category/pants", icon: <FaMale /> },
    { id: 4, label: keys.header.products.skirt, path: "/category/skirt", icon: <FaFemale /> },
    { id: 5, label: keys.header.products.onepiece, path: "/category/one-piece", icon: <FaFemale /> },
    { id: 6, label: keys.header.products.accessory, path: "/category/accessory", icon: <FaRegHandPeace /> },
    { id: 7, label: keys.header.products.underwear, path: "/category/underwear", icon: <FaRegHandPeace /> },
    // { id: 8, label: keys.header.products.legwear, path: "/category/legwear", icon: <FaSocks /> },
    { id: 9, label: keys.header.products.hairAccessory, path: "/category/hair-accessory", icon: <FaHatCowboy /> },
    { id: 10, label: keys.header.products.bag, path: "/category/bag", icon: <FaSuitcase /> },
    { id: 11, label: keys.header.products.shoes, path: "/category/shoes", icon: <FaShoePrints /> },
    { id: 12, label: keys.header.products.wallet, path: "/category/wallet", icon: <FaWallet /> },
    { id: 13, label: keys.header.products.watch, path: "/category/watch", icon: <FaClock /> },
    { id: 14, label: keys.header.products.jacket, path: "/category/jacket", icon: <FaBlender /> },
    { id: 15, label: keys.header.products.blouson, path: "/category/blouson", icon: <FaRegHandPeace /> },
    { id: 16, label: keys.header.products.coat, path: "/category/coat", icon: <FaRegHandPeace /> },
    { id: 17, label: keys.header.products.shirt, path: "/category/shirt", icon: <FaTshirt /> },
    { id: 18, label: keys.header.products.tshirt, path: "/category/t-shirt", icon: <FaTshirt /> },
    { id: 19, label: keys.header.products.tops, path: "/category/tops", icon: <FaTshirt /> }
  ] as ItemProps[];
};

const kidsProductItems = () => {
  return [
    // { id: 1, label: keys.header.products.kidsTops, path: "/category/kids-tops", icon: <FaTshirt /> },
    // { id: 2, label: keys.header.products.kidsPants, path: "/category/kids-pants", icon: <FaMale /> },
    // { id: 3, label: keys.header.products.kidsShoes, path: "/category/kids-shoes", icon: <FaShoePrints /> },
    // { id: 4, label: keys.header.products.kidsHats, path: "/category/kids-hats", icon: <FaHatCowboy /> },
    // { id: 5, label: keys.header.products.kidsAccessories, path: "/category/kids-accessories", icon: <FaRegHandPeace /> },
    { id: 6, label: keys.header.products.swimwear, path: "/category/swimwear", icon: <FaSwimmer /> },
    { id: 7, label: keys.header.products.maternity, path: "/category/maternity", icon: <FaBaby /> }
  ]
};

const otherProductItems = () => {
  return [
    { id: 1, label: keys.header.products.fashionZakka, path: "/category/fashiongoods", icon: <FaWallet /> },
    { id: 2, label: keys.header.products.interior, path: "/category/interior", icon: <FaChair /> },
    { id: 3, label: keys.header.products.kitchen, path: "/category/tablewear", icon: <FaMugHot /> },
    { id: 4, label: keys.header.products.zakka, path: "/category/hobby", icon: <FaDumbbell /> },
    { id: 5, label: keys.header.products.cosme, path: "/category/cosmetics", icon: <FaWineBottle /> },
    { id: 6, label: keys.header.products.musicBooks, path: "/category/music", icon: <FaMusic /> },
    { id: 7, label: keys.header.products.others, path: "/category/etc", icon: <FaEllipsisH /> }
  ] as ItemProps[];
};


export { menProductItems, womenProductItems, kidsProductItems, otherProductItems };
export type { ItemProps };