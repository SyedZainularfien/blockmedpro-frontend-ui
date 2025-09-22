import React from 'react'
import { Link } from 'react-router-dom'
import StyledSmText from '../../common/components/styledSmText/StyledSmText'

const PrivacyPolicy = () => {
    return (
        <div>
            <Link to="/privacy-policy">
                <StyledSmText className='py-2 text-xs !font-normal text-center'>
                    Privacy Policy
                </StyledSmText>
            </Link>
        </div>
    )
}

export default PrivacyPolicy