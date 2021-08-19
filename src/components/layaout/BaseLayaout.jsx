import React from 'react';
import AppRouters from 'router/AppRouters';
import FooterContent from 'components/layaout/FooterContent';


function BaseLayaout() {
    return (
        <div>
            <AppRouters />
            <FooterContent />
        </div>
    );
}

export default BaseLayaout;