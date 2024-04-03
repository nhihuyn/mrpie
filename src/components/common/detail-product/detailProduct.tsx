import React from 'react'

import { Col, Row, Typography } from 'antd'

import { badge } from '../../../assets/images/index'
import Item from './item/Item'

const DetailProduct = ({ data }) => {
    return (
        <>
        <Row className="mx-5 my-10">
            {
                data.map((item, index) => (
                    <Col span={6} key={index}>
                        <Item item={item}/>
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