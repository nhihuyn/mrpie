import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Col, Flex, Row, Typography, Button } from 'antd'
import {  ShoppingCartOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons'

import { bakery1, badge } from '../../../assets/images/index'


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


const DetailProduct = () => {
    const [isHovered, setIsHovered] = useState(true)
    const [actived, setActived] = useState(-1)

    const handleHover = (key: number) => {
        setIsHovered(false)
        setActived(key)
    }
    const handleUnHover = () => {
        setIsHovered(true)
        setActived(-1)
    }

    return (
        <Row className="mx-5 my-10">
            {
                dumpData.map((item, index) => (
                    <Col span={6} key={index}>
                        <div className={`relative text-center ${!isHovered && actived === item.key ? 'blur-sm' : 'blur-none'}`} onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                            <img className="mr-auto ml-auto" src={bakery1} alt='detail-product' width={200} height={200}/>
                            <Title level={4}>{item.title}</Title>
                            <Title level={5}>{item.price}</Title>
                        </div>
                        {
                            !isHovered && actived === item.key &&
                            <Flex className="flex justify-between w-1/2 absolute top-1/2 transform -translate-y-1/2 translate-x-1/2" onMouseOver ={() => handleHover(item.key)}  onMouseLeave={handleUnHover}>
                                {/* link to detail product page */}
                                <Link to="/">
                                    <Button className="bg-neutral-800 hover:!bg-[#E96161]" type="primary" shape="circle" icon={<SearchOutlined />}/>
                                </Link>
                                {/* link to favortite page */}
                                <Link to="/">
                                    <Button className="bg-neutral-800 hover:!bg-[#E96161]" type="primary" shape="circle" icon={<HeartOutlined />}/>
                                </Link>
                                {/* link to shopping cart */}
                                <Link to="/">
                                    <Button className="bg-neutral-800 hover:!bg-[#E96161]" type="primary" shape="circle" icon={<ShoppingCartOutlined />}/>
                                </Link>
                            </Flex>
                        }
                        <div className="flex items-center justify-center absolute top-0 left-20 w-20 h-20">
                            <Typography className="text-white text-lg absolute">{item.eventTitle}</Typography>
                            <img src={badge} alt="event"/>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}

export default DetailProduct