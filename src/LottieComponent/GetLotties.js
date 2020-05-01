import React, {Component} from 'react';
import Lottie from 'react-lottie';


class GetLotties extends Component{

    render(){
        const defaultOptions={
            loop:true,
            autoplay:true,
            animationData:this.props.animationData,
            rendererSettings:{
            preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return(
            <div>
                <Lottie options={defaultOptions}
                height={200}
                width={300}
                />
            </div>
        )
    }
}

export default GetLotties;