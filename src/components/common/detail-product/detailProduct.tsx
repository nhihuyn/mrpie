import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Col, Flex, Row, Typography, Button, Alert } from 'antd'
import {  ShoppingCartOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons'

import { bakery1, badge } from '../../../assets/images/index'
import Notification from '../Notification/Notification'

const { Title } = Typography;

const dumpData = [
    {
        key: 1,
        title: 'Pie',
        price: '30.000',
        eventTitle: '30%'
    },
    {
        key: 2,
        title: 'Pie',
        price: '30.000',
        eventTitle: '30%'
    },
    {
        key: 3,
        title: 'Pie',
        price: '30.000',
        eventTitle: '50%'
    },
    {
        key: 4,
        title: 'Pie',
        price: '30.000',
        eventTitle: '50%'
    }
]


const DetailProduct = ({ data }) => {
    const [isHovered, setIsHovered] = useState(true)
    const [actived, setActived] = useState(-1)
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

    return (
        <>
        {
            favoriteItem.length > 0 && <Notification data={favoriteItem}/>
        }
        <Row className="mx-5 my-10">
            {
                data.map((item, index) => (
                    <Col span={6} key={index}>
                        <div className={`relative text-center ${!isHovered && actived === item.key ? 'blur-sm' : 'blur-none'}`} onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                            <img className="mr-auto ml-auto" src={bakery1} alt={item.description} width={200} height={200}/>
                            <Title level={4}>{item.title}</Title>
                            <Title level={5}>{item.price} - {item.bestPrice}</Title>
                        </div>
                        {
                            !isHovered && actived === item.key &&
                            <Flex className="flex justify-between w-1/2 absolute top-1/2 transform -translate-y-1/2 translate-x-1/2" onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                                {/* link to detail product page */}
                                <Link to={`/products/${item.key}`}>
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
                        {
                            item.eventTitle &&
                            <div className="flex items-center justify-center absolute top-0 left-20 w-20 h-20">
                                <Typography className="text-white text-lg absolute">{item.eventTitle}</Typography>
                                <img src={badge} alt="event"/>
                            </div>
                        }
                       
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default DetailProduct