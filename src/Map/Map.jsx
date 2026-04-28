import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const MyMap = () => {
    const secretKey = 'AIzaSyBDNWEqYPjje9kxFaqZADcvgYjabEXNflE';
    return (
        <div>
             <APIProvider apiKey={secretKey}>
                <Map
                style={{width: '60vw', height: '60vh'}}
                defaultCenter={{lat:22.364567757898385, lng: 91.81076361208527}}
                defaultZoom={15}
                gestureHandling='greedy'
                disableDefaultUI
                />
            </APIProvider>
        </div>
    );
};

export default MyMap;