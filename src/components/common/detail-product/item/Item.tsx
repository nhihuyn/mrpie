import React, { useState } from "react"
import { Link } from 'react-router-dom'

import { Typography, Flex, Button } from 'antd'
import {  ShoppingCartOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons'

import { bakery1
 } from "../../../../assets/images";
import Notification from "../../Notification/Notification";
const { Title } = Typography;

interface ItemProps {
    item: {
        id: string,
        key: number,
        title: string,
        price: string,
        bestPrice: string,
        img: string, 
        description: string,
        eventTitle: string,
    }
    width?: number,
    height?: number,
    isShow?: boolean,
}
const Item: React.FC<ItemProps> = ({ item, width = 200, height = 200, isShow = false }) => {
    const [actived, setActived] = useState(-1)
    const [isHovered, setIsHovered] = useState(true)
    const [favoriteItem, setFavoriteItem] = useState<{ id: number; title: string; }[]>([])

    const handleHover = (key: number) => {
        setIsHovered(false)
        setActived(key)
    }
    const handleUnHover = () => {
        setIsHovered(true)
        setActived(-1)
    }

    const hdIsFavorite = (item) => {
        setFavoriteItem((prev) => [...prev, { id: item.key, title: item.title }]);
    }
    // console.log("isHovered", isHovered)
    // console.log("actived", actived)
    // console.log("actived", item)
    return (
        <div className="relative ">
            {
                favoriteItem.length > 0 && <Notification data={favoriteItem}/>
            }
            <div className={`text-center ${!isHovered && actived === item.key ? 'blur-sm' : 'blur-none'}`} onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                <img className="mr-auto ml-auto" src={bakery1} alt={item.description} width={width} height={height}/>
                { 
                    !isShow && 
                    <>
                        <Title level={4}>{item.title}</Title>
                        <Title level={5}>{item.price} - {item.bestPrice}</Title>
                    </>
                }
            </div>
            {
                !isHovered && actived === item.key &&
                <Flex className="flex justify-between w-1/2 absolute top-1/2 transform -translate-y-1/2 translate-x-1/2" onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                    {/* link to detail product page */}
                    <Link to={`/detail/${item.key}`}>
                        <Button className="bg-neutral-800 hover:!bg-[#E96161] border-solid border-1 border-white" type="primary" shape="circle" icon={<SearchOutlined />}/>
                    </Link>

                    {/*  Add product into favorite */}
                    <Button onClick={() => hdIsFavorite(item)} className="bg-neutral-800 hover:!bg-[#E96161] border-solid border-1 border-white" type="primary" shape="circle" icon={<HeartOutlined />}/>
                
                    {/* link to shopping cart */}
                    <Link to="/cart">
                        <Button className="bg-neutral-800 hover:!bg-[#E96161] border-solid border-1 border-white" type="primary" shape="circle" icon={<ShoppingCartOutlined />}/>
                    </Link>
                </Flex>
            }
        </div>
    )
  
}
export default Item