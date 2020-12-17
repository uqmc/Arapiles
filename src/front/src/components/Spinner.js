import React from "react";
import {Spin} from "antd";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";

const Spinner = () => {
    const graphic = <LoadingOutlined className="page-spinner" spin />
    return( 
        <Spin indicator={graphic}/>
    );
}

export default Spinner;
